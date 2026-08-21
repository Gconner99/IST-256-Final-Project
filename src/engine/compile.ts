import type { EffectType } from "../core/types";
import { COMMON_GLSL, FOOTER_GLSL } from "./shaders";
import { Program } from "./gl";

export function compileEffectSource(effect: EffectType): string {
  return `${COMMON_GLSL}\n${effect.extraUniforms ?? ""}\n${effect.applyGlsl}\n${FOOTER_GLSL}`;
}

export function compileEffectProgram(gl: WebGL2RenderingContext, effect: EffectType): Program {
  return new Program(gl, compileEffectSource(effect));
}

export function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  const n = parseInt(h.length === 3 ? h.split("").map((c) => c + c).join("") : h, 16);
  if (Number.isNaN(n)) return [1, 1, 1];
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}
