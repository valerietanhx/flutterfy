export const CANVAS_SIZE = 550;
export const SIZE_BASE_TOP = 12;
export const SIZE_BASE_BOTTOM = (2 / 3) * SIZE_BASE_TOP;
export const SHADOW_OFFSET = 2;

// colour palette: https://loading.io/color/feature/Spectral-10/
export const topGradientPalette = [
  // potentially change palette so that all pairings of colours look better
  // dark
  "#9e0142", // 0 < x <= 0.1
  "#d53e4f", // 0.1 < x <= 0.2
  "#f46d43", // 0.2 < x <= 0.3
  "#fdae61", // 0.3 < x <= 0.4
  "#fee08b", // 0.4 < x <= 0.5
  "#e6f598", // 0.5 < x <= 0.6
  "#abdda4", // 0.6 < x <= 0.7
  "#66c2a5", // 0.7 < x <= 0.8
  "#3288bd", // 0.8 < x <= 0.9
  "#5e4fa2", // 0.9 < x <= 1
];

// colour palette: https://coolors.co/df015e-e27985-f8a58b-fed6ae-ffefc2-f2f9c8-d6eed2-99d6c3-5ea7d4-8376bc
export const bottomGradientPalette = [
  // light
  "#df015e",
  "#e27985",
  "#f8a58b",
  "#fed6ae",
  "#ffefc2",
  "#f2f9c8",
  "#d6eed2",
  "#99d6c3",
  "#5ea7d4",
  "#8376bc",
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
