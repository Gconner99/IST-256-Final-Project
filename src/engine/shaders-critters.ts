import { CRITTER_GLSL } from "./critters.glsl";
import { placesWithField } from "./shaders";

/** Floaters-as-place only. Compiled the first time that button is used. */
export const GENERATOR_CRITTERS_GLSL = placesWithField(CRITTER_GLSL);
