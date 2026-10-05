import { mulberry32 } from "./random";
import { groundsForKit, inkForKit, type CollageKit } from "../engine/heraldry";

export interface ColorPalette {
  shadow: string;
  highlight: string;
  leak: string;
  inkA: string;
  inkB: string;
}

export const COLOR_PACKS = [
  "kit",
  "brine",
  "candy",
  "citrus",
  "moss",
  "dusk",
  "cream",
  "neon",
  "ice",
  "ember",
  "grape",
  "soda",
  "gold",
  "lagoon",
  "copper",
  "mint",
  "wine",
  "peach",
  "violet",
  "sand",
  "cobalt",
] as const;

export type ColorPackId = (typeof COLOR_PACKS)[number];

export const COLOR_PACK_LABEL: Record<ColorPackId, string> = {
  kit: "Kit",
  brine: "Brine",
  candy: "Candy",
  citrus: "Citrus",
  moss: "Moss",
  dusk: "Dusk",
  cream: "Cream",
  neon: "Neon",
  ice: "Ice",
  ember: "Ember",
  grape: "Grape",
  soda: "Soda",
  gold: "Gold",
  lagoon: "Lagoon",
  copper: "Copper",
  mint: "Mint",
  wine: "Wine",
  peach: "Peach",
  violet: "Violet",
  sand: "Sand",
  cobalt: "Cobalt",
};

interface ColorPackDef {
  grounds: string[];
  ink: string;
  palette: ColorPalette;
}

const PACKS: Record<Exclude<ColorPackId, "kit">, ColorPackDef> = {
  brine: {
    ink: "#d8c078",
    grounds: ["#071824", "#0b2a3c", "#123848", "#0e4050", "#1a2838", "#c4a05a", "#7aa0b0", "#082030", "#e2d0a0", "#2a5060", "#0a1824", "#8ab0c0"],
    palette: { shadow: "#071824", highlight: "#e2d0a0", leak: "#c4a05a", inkA: "#06141c", inkB: "#d8c078" },
  },
  candy: {
    ink: "#ff2ec8",
    grounds: ["#3a1024", "#ff2ec8", "#ffe81a", "#2a0818", "#00d4ff", "#7cff2a", "#ffffff", "#111111", "#ff6a00", "#ff7ad9", "#4a1830", "#fff0f6"],
    palette: { shadow: "#2a0818", highlight: "#ffe0f0", leak: "#ff6aa8", inkA: "#180810", inkB: "#ffb0d0" },
  },
  citrus: {
    ink: "#f0a020",
    grounds: ["#241808", "#ffe08a", "#ff9a2a", "#1a1004", "#f4d060", "#ff7a18", "#fff4c8", "#3a2810", "#e8b040", "#ffc04a", "#140c04", "#f8e8a0"],
    palette: { shadow: "#1a1004", highlight: "#fff4c8", leak: "#ff9a2a", inkA: "#140c04", inkB: "#ffe08a" },
  },
  moss: {
    ink: "#c8e878",
    grounds: ["#142418", "#2a4030", "#d8ecc0", "#0c1810", "#4a6848", "#a8c878", "#1a3020", "#e8f4d0", "#6a8858", "#243828", "#c4dca0", "#081208"],
    palette: { shadow: "#0c1810", highlight: "#e8f4d0", leak: "#a8c878", inkA: "#081208", inkB: "#c8e878" },
  },
  dusk: {
    ink: "#ff8a6a",
    grounds: ["#1a1020", "#3a2048", "#c47888", "#100818", "#5a3068", "#e8a090", "#241428", "#8a5080", "#181028", "#f0c0a8", "#2a1838", "#0c0814"],
    palette: { shadow: "#100818", highlight: "#f0c0a8", leak: "#c47888", inkA: "#0c0814", inkB: "#ff8a6a" },
  },
  cream: {
    ink: "#c45c4a",
    grounds: ["#f4ead4", "#e8d4b0", "#fff6e4", "#d8c49a", "#f0e0c4", "#c8b080", "#ffe8c8", "#e0c8a0", "#f8f0dc", "#b89868", "#efe4c8", "#d4bc90"],
    palette: { shadow: "#c8b080", highlight: "#fff6e4", leak: "#e8a070", inkA: "#3a2414", inkB: "#f4ead4" },
  },
  neon: {
    ink: "#7cff6a",
    grounds: ["#100818", "#ff4ad4", "#2a1040", "#0a0610", "#7cff6a", "#1a0830", "#f0d86a", "#4a1868", "#00e8d0", "#241048", "#ff6ae8", "#080510"],
    palette: { shadow: "#0a0610", highlight: "#7cff6a", leak: "#ff4ad4", inkA: "#080510", inkB: "#f0d86a" },
  },
  ice: {
    ink: "#7ad8ff",
    grounds: ["#0a1828", "#c8e8f8", "#1a3048", "#061018", "#8ac8e8", "#e8f4fc", "#143048", "#4a88b0", "#0c2030", "#b8dcec", "#204060", "#f0f8fc"],
    palette: { shadow: "#061018", highlight: "#e8f4fc", leak: "#7ad8ff", inkA: "#041018", inkB: "#c8e8f8" },
  },
  ember: {
    ink: "#ff6a28",
    grounds: ["#1a0c08", "#ff7a28", "#3a1810", "#100804", "#c44a18", "#f0a040", "#241008", "#e86820", "#180c08", "#ffc070", "#4a2010", "#8a3010"],
    palette: { shadow: "#100804", highlight: "#ffc070", leak: "#ff7a28", inkA: "#140804", inkB: "#f0a040" },
  },
  grape: {
    ink: "#c47aff",
    grounds: ["#180818", "#6a2088", "#2a1038", "#100810", "#9a4ac8", "#e8c0ff", "#241028", "#4a1860", "#c48ae8", "#0c0610", "#3a1848", "#d8a8f0"],
    palette: { shadow: "#100810", highlight: "#e8c0ff", leak: "#9a4ac8", inkA: "#0c0610", inkB: "#c47aff" },
  },
  soda: {
    ink: "#ff4a6a",
    grounds: ["#081828", "#ff4a6a", "#1a3048", "#041018", "#7ad8ff", "#f0f4f8", "#123040", "#e83858", "#0c2030", "#4aa8d8", "#fff0f4", "#2a4860"],
    palette: { shadow: "#041018", highlight: "#f0f4f8", leak: "#ff4a6a", inkA: "#041018", inkB: "#7ad8ff" },
  },
  gold: {
    ink: "#f0c020",
    grounds: ["#1a1408", "#f0c020", "#3a2c10", "#100c04", "#c49828", "#ffe878", "#241c0c", "#e8b830", "#181008", "#fff4b0", "#4a3814", "#a87820"],
    palette: { shadow: "#100c04", highlight: "#fff4b0", leak: "#f0c020", inkA: "#140c04", inkB: "#ffe878" },
  },
  lagoon: {
    ink: "#3dffd0",
    grounds: ["#041820", "#0e3840", "#b8fff2", "#031018", "#2a6870", "#7dffc4", "#0a2830", "#e0fff8", "#1a4850", "#4aa898", "#082028", "#c8fff6"],
    palette: { shadow: "#031018", highlight: "#e0fff8", leak: "#3dffd0", inkA: "#021014", inkB: "#7dffc4" },
  },
  copper: {
    ink: "#e87838",
    grounds: ["#241410", "#c46a38", "#f2d2a0", "#180c08", "#8a3a18", "#e8b86a", "#2a1810", "#d87838", "#1a100c", "#f4e8d0", "#5a2818", "#b85828"],
    palette: { shadow: "#180c08", highlight: "#f4e8d0", leak: "#e87838", inkA: "#140804", inkB: "#f2d2a0" },
  },
  mint: {
    ink: "#4ad8a8",
    grounds: ["#10241c", "#b8f0d8", "#1a3830", "#0c1814", "#7ed8c4", "#e8fff4", "#244840", "#5aa890", "#142820", "#d0f4e8", "#0a1410", "#c4ece0"],
    palette: { shadow: "#0c1814", highlight: "#e8fff4", leak: "#4ad8a8", inkA: "#081410", inkB: "#b8f0d8" },
  },
  wine: {
    ink: "#e84a6a",
    grounds: ["#1a0810", "#6a1830", "#f0c0c8", "#100608", "#8b1e4a", "#e8a0b0", "#241018", "#c45c78", "#14080c", "#f8d8dc", "#3a1020", "#a03858"],
    palette: { shadow: "#100608", highlight: "#f8d8dc", leak: "#e84a6a", inkA: "#0c0408", inkB: "#f0c0c8" },
  },
  peach: {
    ink: "#ff7a4a",
    grounds: ["#2a1410", "#ffb080", "#f4d4c0", "#1a0c08", "#e87850", "#ffe0c8", "#3a2018", "#ffc4a0", "#180c08", "#fff0e4", "#c45c38", "#f0a888"],
    palette: { shadow: "#1a0c08", highlight: "#fff0e4", leak: "#ff7a4a", inkA: "#140804", inkB: "#ffc4a0" },
  },
  violet: {
    ink: "#8a6ad8",
    grounds: ["#141028", "#6a4ac8", "#d8c8ff", "#0c0a18", "#4a38a0", "#e8dcff", "#1c1838", "#8a70d8", "#100c20", "#c4b4f0", "#2a2450", "#b49ae8"],
    palette: { shadow: "#0c0a18", highlight: "#e8dcff", leak: "#8a6ad8", inkA: "#080614", inkB: "#d8c8ff" },
  },
  sand: {
    ink: "#c48a4a",
    grounds: ["#2a2014", "#e8d0a0", "#f4ead4", "#1a140c", "#c4a06a", "#fff4dc", "#3a2c18", "#d8b878", "#20180c", "#f0e2c4", "#8a6a38", "#e0c490"],
    palette: { shadow: "#1a140c", highlight: "#fff4dc", leak: "#c48a4a", inkA: "#140c08", inkB: "#e8d0a0" },
  },
  cobalt: {
    ink: "#4a78ff",
    grounds: ["#081028", "#1a3a88", "#c8d4ff", "#060c1c", "#3a6ad8", "#e4eaff", "#102048", "#7aa2ff", "#0a1428", "#a8b8f0", "#183060", "#dce4ff"],
    palette: { shadow: "#060c1c", highlight: "#e4eaff", leak: "#4a78ff", inkA: "#040814", inkB: "#c8d4ff" },
  },
};

const CLASSIC_PALETTES: ColorPalette[] = [
  { shadow: "#1a1024", highlight: "#f4e2c4", leak: "#ff8a5c", inkA: "#120814", inkB: "#f2d2a8" },
  { shadow: "#0d1f18", highlight: "#e8f5d0", leak: "#b6ff7a", inkA: "#07140f", inkB: "#d7f0b8" },
  { shadow: "#101428", highlight: "#c9d4ff", leak: "#7aa2ff", inkA: "#070b18", inkB: "#dce4ff" },
  { shadow: "#2a1220", highlight: "#ffd5e5", leak: "#ff6a8a", inkA: "#180810", inkB: "#ffd0dc" },
  { shadow: "#1a1208", highlight: "#ffe7b3", leak: "#ff9a3c", inkA: "#140c04", inkB: "#ffe2a8" },
  { shadow: "#041820", highlight: "#b8fff2", leak: "#3dffd0", inkA: "#031018", inkB: "#c8fff6" },
  { shadow: "#1c1010", highlight: "#ffd8c2", leak: "#ff7a4a", inkA: "#140808", inkB: "#ffc8a8" },
  { shadow: "#0a0a0a", highlight: "#f2f0e6", leak: "#ffeeaa", inkA: "#050505", inkB: "#efece0" },
  { shadow: "#1a0820", highlight: "#d0ff3d", leak: "#ff4ad2", inkA: "#100414", inkB: "#e8ff88" },
  { shadow: "#3a0018", highlight: "#ffee55", leak: "#ff3355", inkA: "#220010", inkB: "#ffe98a" },
  { shadow: "#2a0830", highlight: "#ffe66d", leak: "#ff4ad2", inkA: "#180420", inkB: "#ffd6f4" },
  { shadow: "#082428", highlight: "#7dffc4", leak: "#ff8ad4", inkA: "#041418", inkB: "#d8fff0" },
];

export const EFFECT_PALETTES: ColorPalette[] = [
  ...CLASSIC_PALETTES,
  ...Object.values(PACKS).map((pack) => pack.palette),
];

export function packFromUnknown(value?: string | null): ColorPackId {
  if (value && (COLOR_PACKS as readonly string[]).includes(value)) return value as ColorPackId;
  return "kit";
}

export function groundsForLook(kit: CollageKit, pack?: string | null): readonly string[] {
  const id = packFromUnknown(pack);
  if (id === "kit") return groundsForKit(kit);
  return PACKS[id].grounds;
}

export function inkForLook(kit: CollageKit, pack?: string | null): string {
  const id = packFromUnknown(pack);
  if (id === "kit") return inkForKit(kit);
  return PACKS[id].ink;
}

export function paperForLook(kit: CollageKit, seed = 0, pack?: string | null): string {
  const grounds = groundsForLook(kit, pack);
  const rng = mulberry32((seed + 17) >>> 0);
  return grounds[Math.floor(rng() * grounds.length) % grounds.length];
}

export function paletteForPack(pack?: string | null): ColorPalette {
  const id = packFromUnknown(pack);
  if (id === "kit") return CLASSIC_PALETTES[0];
  return PACKS[id].palette;
}

export function pickColorPack(rng: () => number): ColorPackId {
  return COLOR_PACKS[Math.floor(rng() * COLOR_PACKS.length) % COLOR_PACKS.length];
}

export function pickEffectPalette(rng: () => number): ColorPalette {
  return EFFECT_PALETTES[Math.floor(rng() * EFFECT_PALETTES.length) % EFFECT_PALETTES.length];
}
