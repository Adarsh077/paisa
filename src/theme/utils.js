import {
  argbFromHex,
  hexFromArgb,
  themeFromSourceColor,
} from "@material/material-color-utilities";

import {
  getCssBaseline,
  getAccordion,
  getAlert,
  getAppBar,
  getBadge,
  getButton,
  getCard,
  getDrawer,
  getFab,
  getListItem,
  getListItemButton,
  getListItemIcon,
  getMenu,
  getSwitch,
  getToggleButton,
  getToggleButtonGroup,
  getTooltip,
  getTypography,
  getIconButton,
  getSelectBox,
  getOutlinedInput,
} from "./muiComponents";

const getColorToken = (themeMode, palette, lightLevel, darkLevel) =>
  palette[themeMode == "light" ? lightLevel : darkLevel];

export const generateDesignTokens = ({ themeMode, tonalPalette }) => {
  const { primary, secondary, tertiary, neutral, neutralVariant, error } =
    tonalPalette;

  const { customColors } = themeFromSourceColor(
    argbFromHex(tonalPalette.primary[40]),
    [
      {
        name: "info",
        value: argbFromHex("#0288d1"),
        blend: true,
      },
      {
        name: "success",
        value: argbFromHex("#2e7d32"),
        blend: true,
      },
      {
        name: "warning",
        value: argbFromHex("#f59e0b"),
        blend: true,
      },
    ]
  );

  return {
    primary: getColorToken(themeMode, primary, 40, 80),
    onPrimary: getColorToken(themeMode, primary, 100, 20),
    primaryContainer: getColorToken(themeMode, primary, 90, 30),
    onPrimaryContainer: getColorToken(themeMode, primary, 10, 90),

    secondary: getColorToken(themeMode, secondary, 40, 80),
    onSecondary: getColorToken(themeMode, secondary, 100, 20),
    secondaryContainer: getColorToken(themeMode, secondary, 90, 30),
    onSecondaryContainer: getColorToken(themeMode, secondary, 10, 90),

    tertiary: getColorToken(themeMode, tertiary, 40, 80),
    onTertiary: getColorToken(themeMode, tertiary, 100, 20),
    tertiaryContainer: getColorToken(themeMode, tertiary, 90, 30),
    onTertiaryContainer: getColorToken(themeMode, tertiary, 10, 90),

    error: getColorToken(themeMode, error, 40, 80),
    onError: getColorToken(themeMode, error, 100, 20),
    errorContainer: getColorToken(themeMode, error, 90, 30),
    onErrorContainer: getColorToken(themeMode, error, 10, 90),

    primaryFixed: getColorToken(themeMode, primary, 90, 90),
    primaryFixedDim: getColorToken(themeMode, primary, 80, 80),
    onPrimaryFixed: getColorToken(themeMode, primary, 10, 10),
    onPrimaryFixedVariant: getColorToken(themeMode, primary, 30, 30),

    secondaryFixed: getColorToken(themeMode, secondary, 90, 90),
    secondaryFixedDim: getColorToken(themeMode, secondary, 80, 80),
    onSecondaryFixed: getColorToken(themeMode, secondary, 10, 10),
    onSecondaryFixedVariant: getColorToken(themeMode, secondary, 30, 30),

    tertiaryFixed: getColorToken(themeMode, tertiary, 90, 90),
    tertiaryFixedDim: getColorToken(themeMode, tertiary, 80, 80),
    onTertiaryFixed: getColorToken(themeMode, tertiary, 10, 10),
    onTertiaryFixedVariant: getColorToken(themeMode, tertiary, 30, 30),

    surface: getColorToken(themeMode, neutral, 98, 6),
    onSurface: getColorToken(themeMode, neutral, 10, 90),

    surfaceDim: getColorToken(themeMode, neutral, 87, 6),
    surfaceBright: getColorToken(themeMode, neutral, 98, 24),

    surfaceContainerLowest: getColorToken(themeMode, neutral, 100, 4),
    surfaceContainerLow: getColorToken(themeMode, neutral, 96, 10),
    surfaceContainer: getColorToken(themeMode, neutral, 94, 12),
    surfaceContainerHigh: getColorToken(themeMode, neutral, 92, 17),
    surfaceContainerHighest: getColorToken(themeMode, neutral, 90, 22),

    surfaceVariant: getColorToken(themeMode, neutralVariant, 90, 30),
    onSurfaceVariant: getColorToken(themeMode, neutralVariant, 30, 80),

    outline: getColorToken(themeMode, neutralVariant, 50, 60),
    outlineVariant: getColorToken(themeMode, neutralVariant, 80, 30),

    inverseSurface: getColorToken(themeMode, neutral, 20, 90),
    inverseOnSurface: getColorToken(themeMode, neutral, 95, 20),

    inversePrimary: getColorToken(themeMode, primary, 80, 40),
    inverseOnPrimary: "",

    shadow: getColorToken(themeMode, neutral, 0, 0),
    scrim: getColorToken(themeMode, neutral, 0, 0),

    surfaceTintColor: getColorToken(themeMode, primary, 40, 80),

    background: getColorToken(themeMode, neutral, 98, 6),
    onBackground: getColorToken(themeMode, neutral, 10, 90),

    info: hexFromArgb(customColors[0][themeMode].color),
    onInfo: hexFromArgb(customColors[0][themeMode].onColor),
    infoContainer: hexFromArgb(customColors[0][themeMode].colorContainer),
    onInfoContainer: hexFromArgb(customColors[0][themeMode].onColorContainer),

    success: hexFromArgb(customColors[1][themeMode].color),
    onSuccess: hexFromArgb(customColors[1][themeMode].onColor),
    successContainer: hexFromArgb(customColors[1][themeMode].colorContainer),
    onSuccessContainer: hexFromArgb(
      customColors[1][themeMode].onColorContainer
    ),

    warning: hexFromArgb(customColors[2][themeMode].color),
    onWarning: hexFromArgb(customColors[2][themeMode].onColor),
    warningContainer: hexFromArgb(customColors[2][themeMode].colorContainer),
    onWarningContainer: hexFromArgb(
      customColors[2][themeMode].onColorContainer
    ),
    appMenuContainer: getColorToken(themeMode, secondary, 95, 10),
  };
};

export const generateMUIPalette = ({ themeMode, themeScheme }) => {
  const scheme = themeScheme[themeMode];

  return {
    palette: {
      themeMode,
      primary: {
        main: scheme.primary,
        contrastText: scheme.onPrimary,
      },
      onPrimary: {
        main: scheme.onPrimary,
        contrastText: scheme.primary,
      },
      primaryContainer: {
        main: scheme.primaryContainer,
        contrastText: scheme.onPrimaryContainer,
      },
      onPrimaryContainer: {
        main: scheme.onPrimaryContainer,
        contrastText: scheme.primaryContainer,
      },

      secondary: {
        main: scheme.secondary,
        contrastText: scheme.onSecondary,
      },
      onSecondary: {
        main: scheme.onSecondary,
        contrastText: scheme.secondary,
      },
      secondaryContainer: {
        main: scheme.secondaryContainer,
        contrastText: scheme.onSecondaryContainer,
      },
      onSecondaryContainer: {
        main: scheme.onSecondaryContainer,
        contrastText: scheme.secondaryContainer,
      },

      tertiary: {
        main: scheme.tertiary,
        contrastText: scheme.onTertiary,
      },
      onTertiary: {
        main: scheme.onTertiary,
        contrastText: scheme.tertiary,
      },
      tertiaryContainer: {
        main: scheme.tertiaryContainer,
        contrastText: scheme.onTertiaryContainer,
      },
      onTertiaryContainer: {
        main: scheme.onTertiaryContainer,
        contrastText: scheme.tertiaryContainer,
      },

      error: {
        main: scheme.error,
        contrastText: scheme.onError,
      },
      onError: {
        main: scheme.onError,
        contrastText: scheme.error,
      },
      errorContainer: {
        main: scheme.errorContainer,
        contrastText: scheme.onErrorContainer,
      },
      onErrorContainer: {
        main: scheme.onErrorContainer,
        contrastText: scheme.errorContainer,
      },

      primaryFixed: {
        main: scheme.primaryFixed,
      },
      primaryFixedDim: {
        main: scheme.primaryFixedDim,
      },
      onPrimaryFixed: {
        main: scheme.onPrimaryFixed,
      },
      onPrimaryFixedVariant: {
        main: scheme.onPrimaryFixedVariant,
      },

      secondaryFixed: {
        main: scheme.secondaryFixed,
      },
      secondaryFixedDim: {
        main: scheme.secondaryFixedDim,
      },
      onSecondaryFixed: {
        main: scheme.onSecondaryFixed,
      },
      onSecondaryFixedVariant: {
        main: scheme.onSecondaryFixedVariant,
      },

      tertiaryFixed: {
        main: scheme.tertiaryFixed,
      },
      tertiaryFixedDim: {
        main: scheme.tertiaryFixedDim,
      },
      onTertiaryFixed: {
        main: scheme.onTertiaryFixed,
      },
      onTertiaryFixedVariant: {
        main: scheme.onTertiaryFixedVariant,
      },

      surface: {
        main: scheme.surface,
        contrastText: scheme.onSurface,
      },
      onSurface: {
        main: scheme.onSurface,
        contrastText: scheme.surface,
      },

      surfaceDim: {
        main: scheme.surfaceDim,
      },
      surfaceBright: {
        main: scheme.surfaceBright,
      },

      surfaceContainerLowest: {
        main: scheme.surfaceContainerLowest,
      },
      surfaceContainerLow: {
        main: scheme.surfaceContainerLow,
      },
      surfaceContainer: {
        main: scheme.surfaceContainer,
      },
      surfaceContainerHigh: {
        main: scheme.surfaceContainerHigh,
      },
      surfaceContainerHighest: {
        main: scheme.surfaceContainerHighest,
      },

      surfaceVariant: {
        main: scheme.surfaceVariant,
        contrastText: scheme.onSurfaceVariant,
      },
      onSurfaceVariant: {
        main: scheme.onSurfaceVariant,
        contrastText: scheme.surfaceVariant,
      },

      outline: {
        main: scheme.outline,
      },
      outlineVariant: {
        main: scheme.outlineVariant,
      },

      inversePrimary: {
        main: scheme.inversePrimary,
        contrastText: scheme.inverseOnPrimary,
      },
      inverseOnPrimary: {
        main: scheme.inverseOnPrimary,
        contrastText: scheme.inversePrimary,
      },
      inverseSurface: {
        main: scheme.inverseSurface,
        contrastText: scheme.inverseSurface,
      },
      inverseOnSurface: {
        main: scheme.inverseOnSurface,
        contrastText: scheme.inverseSurface,
      },

      shadow: {
        main: scheme.shadow,
      },
      scrim: {
        main: scheme.scrim,
      },

      surfaceTintColor: {
        main: scheme.surfaceTintColor,
      },

      /**/
      background: {
        default: scheme.surfaceContainer,
        paper: scheme.surface,
      },
      onBackground: {
        main: scheme.onSurface,
      },
      common: {
        white: scheme.background,
        black: scheme.onBackground,
      },
      text: {
        primary: scheme.onSurface,
        secondary: scheme.onSecondaryContainer,
        disabled: scheme.onSurfaceVariant,
      },

      info: {
        main: scheme.info,
        contrastText: scheme.onInfo,
      },
      onInfo: {
        main: scheme.onInfo,
        contrastText: scheme.info,
      },
      infoContainer: {
        main: scheme.infoContainer,
        contrastText: scheme.onInfoContainer,
      },
      onInfoContainer: {
        main: scheme.onInfoContainer,
        contrastText: scheme.infoContainer,
      },

      success: {
        main: scheme.success,
        contrastText: scheme.onSuccess,
      },
      onSuccess: {
        main: scheme.onSuccess,
        contrastText: scheme.success,
      },
      successContainer: {
        main: scheme.successContainer,
        contrastText: scheme.onSuccessContainer,
      },
      onSuccessContainer: {
        main: scheme.onSuccessContainer,
        contrastText: scheme.successContainer,
      },

      warning: {
        main: scheme.warning,
        contrastText: scheme.onWarning,
      },
      onWarning: {
        main: scheme.onWarning,
        contrastText: scheme.warning,
      },
      warningContainer: {
        main: scheme.warningContainer,
        contrastText: scheme.onWarningContainer,
      },
      onWarningContainer: {
        main: scheme.onWarningContainer,
        contrastText: scheme.warningContainer,
      },

      divider: scheme.outline,

      custom: {
        appMenuContainer: {
          main: scheme.appMenuContainer,
        },
      },
    },
    tones: themeScheme.tones,
  };
};

export const getMUIComponents = ({ theme }) => {
  return {
    components: {
      ...getCssBaseline(theme),
      ...getAccordion(theme),
      ...getAlert(theme),
      ...getAppBar(theme),
      ...getBadge(theme),
      ...getButton(theme),
      ...getCard(theme),
      ...getDrawer(theme),
      ...getFab(theme),
      ...getListItem(theme),
      ...getListItemButton(theme),
      ...getListItemIcon(theme),
      ...getMenu(theme),
      ...getSwitch(theme),
      ...getToggleButton(theme),
      ...getToggleButtonGroup(theme),
      ...getTooltip(theme),
      ...getTypography(theme),
      ...getIconButton(theme),
      ...getSelectBox(theme),
      ...getOutlinedInput(theme),
    },
  };
};
