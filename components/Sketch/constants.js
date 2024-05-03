export const SIZE_BASE_TOP = 12;
export const SIZE_BASE_BOTTOM = (2 / 3) * SIZE_BASE_TOP;
export const SHADOW_OFFSET = 2;

export const topGradientPalette = [
  // dark
  "#fb4434", // 0 < x <= 0.1
  "#fa6492", // 0.1 < x <= 0.2
  "#f77f00", // 0.2 < x <= 0.3
  "#fa9f35", // 0.3 < x <= 0.4
  "#fabf49", // 0.4 < x <= 0.5
  "#479642", // 0.5 < x <= 0.6
  "#469893", // 0.6 < x <= 0.7
  "#559cf3", // 0.7 < x <= 0.8
  "#7f87f7", // 0.8 < x <= 0.9
  "#9c92fb", // 0.9 < x <= 1
];

export const bottomGradientPalette = [
  // light
  "#fd9187",
  "#ffb5cb",
  "#ffba70",
  "#facc75",
  "#fcd588",
  "#85c77f",
  "#73bfba",
  "#8dbcf7",
  "#b3b7fa",
  "#c8c3fd",
];

// https://artlist.io/blog/music-bpm/
export function convertTempo(tempo) {
  return tempo <= 70
    ? 0.01 // slow
    : tempo <= 90
    ? 0.015 // medium-slow
    : tempo <= 110
    ? 0.02 // medium
    : tempo <= 130
    ? 0.025 // medium-fast
    : 0.03; // fast
}

export function getGradientIndex(value) {
  return Math.max(0, Math.ceil(value * 10) - 1);
}
