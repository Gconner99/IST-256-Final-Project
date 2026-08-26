import { VERT_SRC } from "./shaders";

export class GLError extends Error {}

export function createGL(canvas: HTMLCanvasElement): WebGL2RenderingContext {
  const gl = canvas.getContext("webgl2", {
    alpha: false,
    antialias: false,
    preserveDrawingBuffer: false,
    powerPreference: "low-power",
    failIfMajorPerformanceCaveat: false,
    premultipliedAlpha: false,
  });
  if (!gl) throw new GLError("WebGL2 is required for Phosphene.");
  return gl;
}

export function compileShader(gl: WebGL2RenderingContext, type: number, src: string): WebGLShader {
  const sh = gl.createShader(type);
  if (!sh) throw new GLError("Unable to create shader");
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    const log = gl.getShaderInfoLog(sh) ?? "shader compile failed";
    gl.deleteShader(sh);
    throw new GLError(log);
  }
  return sh;
}

export class Program {
  readonly gl: WebGL2RenderingContext;
  readonly prog: WebGLProgram;
  private uniforms = new Map<string, WebGLUniformLocation | null>();

  constructor(gl: WebGL2RenderingContext, fragSrc: string, vertSrc = VERT_SRC) {
    this.gl = gl;
    const vs = compileShader(gl, gl.VERTEX_SHADER, vertSrc);
    const fs = compileShader(gl, gl.FRAGMENT_SHADER, fragSrc);
    const prog = gl.createProgram();
    if (!prog) throw new GLError("Unable to create program");
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    gl.deleteShader(vs);
    gl.deleteShader(fs);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      const log = gl.getProgramInfoLog(prog) ?? "link failed";
      gl.deleteProgram(prog);
      throw new GLError(log);
    }
    this.prog = prog;
  }

  use() {
    this.gl.useProgram(this.prog);
  }

  loc(name: string): WebGLUniformLocation | null {
    if (!this.uniforms.has(name)) {
      this.uniforms.set(name, this.gl.getUniformLocation(this.prog, name));
    }
    return this.uniforms.get(name) ?? null;
  }

  i(name: string, v: number) {
    const l = this.loc(name);
    if (l) this.gl.uniform1i(l, v);
  }
  f(name: string, v: number) {
    const l = this.loc(name);
    if (l) this.gl.uniform1f(l, v);
  }
  v2(name: string, x: number, y: number) {
    const l = this.loc(name);
    if (l) this.gl.uniform2f(l, x, y);
  }
  v3(name: string, x: number, y: number, z: number) {
    const l = this.loc(name);
    if (l) this.gl.uniform3f(l, x, y, z);
  }
  v4(name: string, x: number, y: number, z: number, w: number) {
    const l = this.loc(name);
    if (l) this.gl.uniform4f(l, x, y, z, w);
  }

  dispose() {
    this.gl.deleteProgram(this.prog);
  }
}

export function createTexture(gl: WebGL2RenderingContext): WebGLTexture {
  const tex = gl.createTexture();
  if (!tex) throw new GLError("Unable to create texture");
  gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  return tex;
}

export function texImage(
  gl: WebGL2RenderingContext,
  tex: WebGLTexture,
  source: TexImageSource,
) {
  gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
}

export function texAlloc(gl: WebGL2RenderingContext, tex: WebGLTexture, w: number, h: number) {
  gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
}

export class FBO {
  readonly fbo: WebGLFramebuffer;
  readonly tex: WebGLTexture;
  w = 1;
  h = 1;

  constructor(private gl: WebGL2RenderingContext) {
    const fbo = gl.createFramebuffer();
    if (!fbo) throw new GLError("Unable to create framebuffer");
    this.fbo = fbo;
    this.tex = createTexture(gl);
    this.resize(1, 1);
  }

  resize(w: number, h: number) {
    w = Math.max(1, Math.floor(w));
    h = Math.max(1, Math.floor(h));
    if (w === this.w && h === this.h) return;
    this.w = w;
    this.h = h;
    texAlloc(this.gl, this.tex, w, h);
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fbo);
    this.gl.framebufferTexture2D(
      this.gl.FRAMEBUFFER,
      this.gl.COLOR_ATTACHMENT0,
      this.gl.TEXTURE_2D,
      this.tex,
      0,
    );
  }

  bind() {
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fbo);
    this.gl.viewport(0, 0, this.w, this.h);
  }

  dispose() {
    this.gl.deleteFramebuffer(this.fbo);
    this.gl.deleteTexture(this.tex);
  }
}

export function bindTex(gl: WebGL2RenderingContext, unit: number, tex: WebGLTexture) {
  gl.activeTexture(gl.TEXTURE0 + unit);
  gl.bindTexture(gl.TEXTURE_2D, tex);
}

export function drawTri(gl: WebGL2RenderingContext) {
  gl.drawArrays(gl.TRIANGLES, 0, 3);
}

export const BLEND_INDEX: Record<string, number> = {
  normal: 0,
  add: 1,
  screen: 2,
  multiply: 3,
  overlay: 4,
  difference: 5,
  exclusion: 6,
  lighten: 7,
  darken: 8,
};

export const MASK_INDEX: Record<string, number> = {
  none: 0,
  rect: 1,
  circle: 2,
  gradient: 3,
  noise: 4,
  image: 5,
};

export const GEN_INDEX: Record<string, number> = {
  plasma: 0,
  noise: 1,
  bars: 2,
  gradient: 3,
  solid: 4,
  checker: 5,
  critters: 6,
  stars: 7,
  marsh: 8,
  oil: 9,
  paper: 10,
  cave: 11,
  stage: 12,
  sketch: 13,
  felt: 14,
  foil: 15,
  plush: 16,
  yarn: 17,
  sequin: 18,
  quilt: 19,
};
