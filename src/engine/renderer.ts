import type { EffectInstance, Layer, MediaSource, Project, QualityMode } from "../core/types";
import { resolvedLayerParams } from "../core/timeline";
import { dancerForCompile } from "../effects/dancer";
import { solidsForCompile } from "../effects/solids";
import { allEffects, getEffect } from "../effects/registry";
import { getSoundtrack, sampleAudio } from "../media/audio";
import {
  BLEND_INDEX,
  bindTex,
  createGL,
  createTexture,
  drawTri,
  FBO,
  GEN_INDEX,
  MASK_INDEX,
  Program,
  texImage,
} from "./gl";
import { compileEffectProgram, hexToRgb } from "./compile";
import {
  BLIT_GLSL,
  COMPOSITE_GLSL,
  COPY_GLSL,
  FEEDBACK_GLSL,
  GENERATOR_GLSL,
  TEXTURE_GLSL,
} from "./shaders";

const RING = 8;

function imageData(pixels: Uint8ClampedArray, width: number, height: number) {
  return new ImageData(pixels as unknown as ImageDataArray, width, height);
}

function enumIndex(fxTypeParams: { id: string; options?: { value: string }[] }[], id: string, value: unknown): number {
  const def = fxTypeParams.find((p) => p.id === id);
  if (!def?.options) return Number(value) || 0;
  const idx = def.options.findIndex((o) => o.value === value);
  return idx < 0 ? 0 : idx;
}

export class Renderer {
  readonly gl: WebGL2RenderingContext;
  readonly canvas: HTMLCanvasElement;
  private ping: FBO;
  private pong: FBO;
  private composite: FBO;
  private post: FBO;
  private ring: FBO[] = [];
  private ringIndex = 0;
  private layerHist = new Map<string, FBO>();
  private sourceTex = new Map<string, WebGLTexture>();
  private audioEnergy = 0;
  private audioBass = 0;
  private effectProg = new Map<string, Program>();
  private copy: Program;
  private blit: Program;
  private compositeProg: Program;
  private feedbackProg: Program;
  private generatorProg: Program;
  private textureProg: Program;
  private black: WebGLTexture;
  lastError: string | null = null;
  width = 1;
  height = 1;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.gl = createGL(canvas);
    const gl = this.gl;
    this.ping = new FBO(gl);
    this.pong = new FBO(gl);
    this.composite = new FBO(gl);
    this.post = new FBO(gl);
    for (let i = 0; i < RING; i++) this.ring.push(new FBO(gl));
    this.copy = new Program(gl, COPY_GLSL);
    this.blit = new Program(gl, BLIT_GLSL);
    this.compositeProg = new Program(gl, COMPOSITE_GLSL);
    this.feedbackProg = new Program(gl, FEEDBACK_GLSL);
    this.generatorProg = new Program(gl, GENERATOR_GLSL);
    this.textureProg = new Program(gl, TEXTURE_GLSL);
    this.black = createTexture(gl);
    gl.bindTexture(gl.TEXTURE_2D, this.black);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 255]));
  }

  private compileType(typeId: string, mini = false): Program | null {
    const key = typeId === "dancer" && mini ? "dancer:mini" : typeId === "solids" && mini ? "solids:mini" : typeId;
    const cached = this.effectProg.get(key);
    if (cached) return cached;
    const def =
      typeId === "dancer" ? dancerForCompile(mini) : typeId === "solids" ? solidsForCompile(mini) : getEffect(typeId);
    if (!def) return null;
    try {
      const p = compileEffectProgram(this.gl, def);
      this.effectProg.set(key, p);
      return p;
    } catch (err) {
      this.lastError = `${key}: ${err instanceof Error ? err.message : String(err)}`;
      console.warn(this.lastError);
      return null;
    }
  }

  /** Compile effect shaders a few at a time so the first Rand all does not hitch. */
  prewarmEffects() {
    const ids = allEffects()
      .map((e) => e.id)
      .sort(
        (a, b) =>
          Number(a !== "dancer" && a !== "solids" && a !== "critters") -
          Number(b !== "dancer" && b !== "solids" && b !== "critters"),
      );
    let i = 0;
    const step = () => {
      if (i >= ids.length) return;
      this.compileType(ids[i++]);
      if (i < ids.length) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  private progFor(fx: EffectInstance): Program | null {
    const mini = (fx.typeId === "dancer" || fx.typeId === "solids") && fx.params.crowd === "mini";
    return this.compileType(fx.typeId, mini);
  }

  resetTemporal() {
    const gl = this.gl;
    for (const f of [...this.ring, ...this.layerHist.values()]) {
      f.bind();
      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
    }
    this.ringIndex = 0;
  }

  private ensureSize(w: number, h: number) {
    if (w === this.width && h === this.height) return;
    this.width = w;
    this.height = h;
    for (const f of [this.ping, this.pong, this.composite, this.post, ...this.ring, ...this.layerHist.values()]) {
      f.resize(w, h);
    }
  }

  private histFor(id: string): FBO {
    let f = this.layerHist.get(id);
    if (!f) {
      f = new FBO(this.gl);
      f.resize(this.width, this.height);
      this.layerHist.set(id, f);
    }
    return f;
  }

  private uploadSource(src: MediaSource) {
    let tex = this.sourceTex.get(src.id);
    if (!tex) {
      tex = createTexture(this.gl);
      this.sourceTex.set(src.id, tex);
    }
    const media = src.frozenFrame || src.bitmap || src.video;
    if (media) texImage(this.gl, tex, media);
    return tex;
  }

  private blitTo(target: FBO, tex: WebGLTexture) {
    const gl = this.gl;
    target.bind();
    this.copy.use();
    bindTex(gl, 0, tex);
    this.copy.i("uTex", 0);
    drawTri(gl);
  }

  private drawGenerator(target: FBO, src: MediaSource, time: number, seed = 77) {
    const gl = this.gl;
    target.bind();
    this.generatorProg.use();
    this.generatorProg.i("uMode", GEN_INDEX[src.generator ?? "plasma"] ?? 0);
    this.generatorProg.f("uTime", time);
    const a = src.colorA ? hexToRgb(src.colorA) : ([0.07, 0.04, 0.1] as const);
    const b = src.colorB ? hexToRgb(src.colorB) : ([0.92, 0.78, 0.55] as const);
    this.generatorProg.v3("uColorA", a[0], a[1], a[2]);
    this.generatorProg.v3("uColorB", b[0], b[1], b[2]);
    this.generatorProg.f("uScale", 6);
    this.generatorProg.f("uSeed", seed);
    this.generatorProg.f("u_audio", this.audioEnergy);
    this.generatorProg.f("u_bass", this.audioBass);
    drawTri(gl);
  }

  private drawTexture(target: FBO, tex: WebGLTexture, layer: Layer) {
    const gl = this.gl;
    target.bind();
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    this.textureProg.use();
    bindTex(gl, 0, tex);
    this.textureProg.i("uTex", 0);
    this.textureProg.v2("uTranslate", layer.transform.x, layer.transform.y);
    this.textureProg.f("uScale", layer.transform.scale);
    this.textureProg.f("uRotation", layer.transform.rotation);
    this.textureProg.v2("uFit", 1, 1);
    drawTri(gl);
  }

  private applyEffect(
    dest: FBO,
    srcTex: WebGLTexture,
    fx: EffectInstance,
    layer: Layer,
    time: number,
    frame: number,
    quality: QualityMode,
    feedbackTex: WebGLTexture,
    historyTex: WebGLTexture,
  ) {
    const def = getEffect(fx.typeId);
    const prog = this.progFor(fx);
    if (!def || !prog) {
      this.blitTo(dest, srcTex);
      return;
    }
    const gl = this.gl;
    dest.bind();
    prog.use();
    bindTex(gl, 0, srcTex);
    bindTex(gl, 1, feedbackTex);
    bindTex(gl, 2, historyTex);
    prog.i("uTex", 0);
    prog.i("uFeedback", 1);
    prog.i("uHistory", 2);
    prog.i("uMask", 3);
    prog.v2("uResolution", dest.w, dest.h);
    prog.v2("uTexel", 1 / dest.w, 1 / dest.h);
    prog.f("uTime", time);
    prog.f("uFrame", frame);
    prog.f("uQuality", quality === "draft" ? 0 : quality === "preview" ? 1 : 2);
    prog.f("u_audio", this.audioEnergy);
    prog.f("u_bass", this.audioBass);
    prog.v2("u_translate", layer.transform.x, layer.transform.y);
    prog.f("u_scale", layer.transform.scale);
    prog.f("u_rotation", layer.transform.rotation);
    const mask = layer.mask;
    prog.i("u_maskType", MASK_INDEX[mask.type] ?? 0);
    prog.i("u_maskInvert", mask.invert ? 1 : 0);
    prog.f("u_maskSoftness", mask.softness);
    prog.v4("u_maskRect", mask.rect.x, mask.rect.y, mask.rect.w, mask.rect.h);
    prog.v2("u_maskCenter", mask.center.x, mask.center.y);
    prog.f("u_maskRadius", mask.radius);
    prog.f("u_maskGradientAngle", mask.gradientAngle);
    prog.f("u_maskNoiseScale", mask.noiseScale);

    let mix = 1;
    for (const p of def.params) {
      const raw = fx.params[p.id] ?? p.default;
      const uname = `u_${p.id}`;
      if (p.kind === "color" && typeof raw === "string") {
        const [r, g, b] = hexToRgb(raw);
        prog.v3(uname, r, g, b);
      } else if (p.kind === "bool") {
        prog.f(uname, raw ? 1 : 0);
      } else if (p.kind === "enum") {
        prog.f(uname, enumIndex(def.params, p.id, raw));
      } else {
        prog.f(uname, Number(raw));
      }
      if (p.id === "mix") mix = Number(raw);
    }
    prog.f("u_mix", mix);
    drawTri(gl);
  }

  render(project: Project, time: number, opts?: { width?: number; height?: number; quality?: QualityMode; vignette?: number }) {
    const gl = this.gl;
    const quality = opts?.quality ?? project.quality;
    const scale = quality === "draft" ? 0.5 : 1;
    const w = Math.max(16, Math.floor((opts?.width ?? this.canvas.width) * scale));
    const h = Math.max(16, Math.floor((opts?.height ?? this.canvas.height) * scale));
    this.ensureSize(w, h);

    this.composite.bind();
    gl.clearColor(0.02, 0.02, 0.03, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);

    const fb = project.globalFeedback;
    const delay = Math.max(0, Math.min(RING - 1, Math.round(fb.delay)));
    const readIdx = (this.ringIndex - 1 - delay + RING * 8) % RING;
    const feedbackTex = this.ring[readIdx].tex;
    const frame = Math.floor(time * project.fps);
    const mix = sampleAudio(getSoundtrack(project), time);
    this.audioEnergy = mix.energy;
    this.audioBass = mix.bass;

    for (const rawLayer of project.layers) {
      if (!rawLayer.enabled) continue;
      const layer = resolvedLayerParams(project, rawLayer, time);
      const src = project.sources.find((s) => s.id === layer.sourceId) ?? null;
      if (!src || src.kind === "generator" || src.kind === "audio") {
        const gen = src && src.kind !== "audio" ? src : ({ generator: "plasma" } as MediaSource);
        this.drawGenerator(this.ping, gen, time, project.seed);
      } else {
        const tex = this.uploadSource(src);
        this.drawTexture(this.ping, tex, layer);
      }

      let read = this.ping;
      let write = this.pong;
      const hist = this.histFor(layer.id);
      for (const fx of layer.effects) {
        if (!fx.enabled) continue;
        this.applyEffect(write, read.tex, fx, layer, time, frame, quality, feedbackTex, hist.tex);
        const tmp = read;
        read = write;
        write = tmp;
      }

      if (layer.feedback.amount > 0.001) {
        write.bind();
        this.feedbackProg.use();
        bindTex(gl, 0, read.tex);
        bindTex(gl, 1, hist.tex);
        this.feedbackProg.i("uTex", 0);
        this.feedbackProg.i("uFeedback", 1);
        this.feedbackProg.f("uAmount", layer.feedback.amount);
        this.feedbackProg.f("uOpacity", layer.feedback.opacity);
        this.feedbackProg.f("uScale", layer.feedback.scale);
        this.feedbackProg.f("uRotation", layer.feedback.rotation);
        this.feedbackProg.f("uDistortion", layer.feedback.distortion);
        this.feedbackProg.f("uTime", time);
        drawTri(gl);
        const tmp = read;
        read = write;
        write = tmp;
      }

      this.blitTo(this.post, this.composite.tex);
      this.composite.bind();
      this.compositeProg.use();
      bindTex(gl, 0, this.post.tex);
      bindTex(gl, 1, read.tex);
      this.compositeProg.i("uBase", 0);
      this.compositeProg.i("uLayer", 1);
      this.compositeProg.f("uOpacity", layer.opacity);
      this.compositeProg.i("uBlend", BLEND_INDEX[layer.blendMode] ?? 0);
      this.compositeProg.v2("uResolution", w, h);
      drawTri(gl);

      this.blitTo(hist, read.tex);
    }

    if (fb.amount > 0.001) {
      this.post.bind();
      this.feedbackProg.use();
      bindTex(gl, 0, this.composite.tex);
      bindTex(gl, 1, feedbackTex);
      this.feedbackProg.i("uTex", 0);
      this.feedbackProg.i("uFeedback", 1);
      this.feedbackProg.f("uAmount", fb.amount);
      this.feedbackProg.f("uOpacity", fb.opacity);
      this.feedbackProg.f("uScale", fb.scale);
      this.feedbackProg.f("uRotation", fb.rotation);
      this.feedbackProg.f("uDistortion", fb.distortion);
      this.feedbackProg.f("uTime", time);
      drawTri(gl);
      this.blitTo(this.composite, this.post.tex);
    }

    this.blitTo(this.ring[this.ringIndex], this.composite.tex);
    this.ringIndex = (this.ringIndex + 1) % RING;

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    this.blit.use();
    bindTex(gl, 0, this.composite.tex);
    this.blit.i("uTex", 0);
    this.blit.f("uVignette", opts?.vignette ?? 0.25);
    drawTri(gl);
  }

  capture(project: Project, time: number, width: number, height: number, mime = "image/png", quality = 0.92): Promise<Blob> {
    const canvas = this.paintFrame(project, time, width, height);
    return new Promise((resolve, reject) => {
      canvas.toBlob(
        (blob) => {
          if (!blob) reject(new Error("Export failed"));
          else resolve(blob);
        },
        mime,
        quality,
      );
    });
  }

  /** Render at export size into a 2D canvas. Does not resize the live WebGL canvas. */
  paintFrame(project: Project, time: number, width: number, height: number, target?: HTMLCanvasElement): HTMLCanvasElement {
    const canvas = target ?? document.createElement("canvas");
    if (canvas.width !== width) canvas.width = width;
    if (canvas.height !== height) canvas.height = height;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) throw new Error("No 2d context");
    this.render(project, time, { width, height, quality: "export", vignette: 0 });
    this.gl.finish();
    const pixels = this.readPixels(this.width, this.height);
    if (this.width === width && this.height === height) {
      ctx.putImageData(imageData(pixels, width, height), 0, 0);
    } else {
      const tmp = document.createElement("canvas");
      tmp.width = this.width;
      tmp.height = this.height;
      tmp.getContext("2d")?.putImageData(imageData(pixels, this.width, this.height), 0, 0);
      ctx.drawImage(tmp, 0, 0, width, height);
    }
    return canvas;
  }

  readPixels(width: number, height: number): Uint8ClampedArray {
    const gl = this.gl;
    const pixels = new Uint8Array(width * height * 4);
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.composite.fbo);
    gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    const flipped = new Uint8ClampedArray(new ArrayBuffer(pixels.length));
    const stride = width * 4;
    for (let y = 0; y < height; y++) {
      flipped.set(pixels.subarray((height - 1 - y) * stride, (height - y) * stride), y * stride);
    }
    return flipped;
  }
}
