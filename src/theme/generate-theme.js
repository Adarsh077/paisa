import {
  argbFromHex,
  hexFromArgb,
  themeFromSourceColor,
} from "@material/material-color-utilities";
import { createTheme } from "@mui/material/styles";

import { deepmerge } from "@mui/utils";

import {
  generateDesignTokens,
  generateMUIPalette,
  getMUIComponents,
} from "./utils";

const generateTheme = (themeMode, primaryColor) => {
  const LEVELS = [
    0, 4, 6, 10, 12, 17, 20, 22, 24, 30, 40, 50, 60, 70, 80, 87, 90, 92, 94, 95,
    96, 98, 99, 100,
  ];
  const intColor = argbFromHex(primaryColor);
  const { palettes } = themeFromSourceColor(intColor);

  const tones = {};

  for (const [key, palette] of Object.entries(palettes)) {
    const tonelevel = {};
    for (const level of LEVELS) {
      tonelevel[level] = hexFromArgb(palette.tone(level));
    }
    tones[key] = tonelevel;
  }

  const lightTokens = generateDesignTokens({
    themeMode: "light",
    tonalPalette: tones,
  });
  const darkTokens = generateDesignTokens({
    themeMode: "dark",
    tonalPalette: tones,
  });

  const themeScheme = {
    light: lightTokens,
    dark: darkTokens,
    tones,
  };

  const muiPalette = generateMUIPalette({
    themeMode,
    themeScheme,
  });

  let theme = createTheme(muiPalette);
  theme = deepmerge(theme, getMUIComponents({ theme }));

  console.log({ ...theme });

  return theme;
};

export default generateTheme;
