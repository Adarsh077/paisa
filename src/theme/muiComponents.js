import {
  Blend,
  argbFromHex,
  hexFromArgb,
} from '@material/material-color-utilities';

import { alpha } from '@mui/material';

export const getCssBaseline = () => {
  return {
    MuiCssBaseline: {
      defaultProps: {
        enableColorScheme: true,
      },
      styleOverrides: {
        '*::-webkit-scrollbar': {
          display: 'none',
        },
      },
    },
  };
};

export const getAccordion = (theme) => {
  const { palette } = theme;
  return {
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: theme.shadows[1],
          border: `0px solid ${palette.outlineVariant.main}`,
          color: palette.onBackground.main,
          backgroundColor: palette.surfaceBright.main,
          '&:before': {
            backgroundColor: palette.surfaceBright.main,
            display: 'none',
          },
          '&.Mui-disabled': {
            backgroundColor: palette.inverseOnSurface.main,
            color: palette.inverseSurface.main,
            border: `0px solid ${palette.outlineVariant.main}`,
          },
          '& .MuiAccordionSummary-root > .MuiAccordionSummary-expandIconWrapper ':
            {
              color: palette.onBackground.main,
            },
        },
      },
    },
  };
};

export const getAlert = (theme) => {
  const { palette } = theme;
  return {
    MuiAlert: {
      defaultProps: {
        variant: 'standard',
      },
      styleOverrides: {
        root: {
          borderRadius: '20px',
        },
        standardError: {
          background: palette.errorContainer.main,
          color: palette.onErrorContainer.main,
        },
        standardInfo: {
          background: palette.infoContainer.main,
          color: palette.infoContainer.contrastText,
        },
        standardWarning: {
          background: palette.warningContainer.main,
          color: palette.onWarningContainer.main,
        },
        standardSuccess: {
          background: palette.successContainer.main,
          color: palette.onSuccessContainer.main,
        },
        filledError: {
          background: palette.error.main,
          color: palette.onError.main,
        },
        filledInfo: {
          background: palette.info.main,
          color: palette.onInfo.main,
        },
        filledWarning: {
          background: palette.warning.main,
          color: palette.onWarning.main,
        },
        filledSuccess: {
          background: palette.success.main,
          color: palette.onSuccess.main,
        },
        outlinedError: {
          color: palette.error.main,
        },
        outlinedInfo: {
          color: palette.info.main,
        },
        outlinedWarning: {
          color: palette.warning.main,
        },
        outlinedSuccess: {
          color: palette.success.main,
        },
      },
    },
  };
};

export const getAppBar = (theme) => {
  const { palette } = theme;
  return {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        color: 'default',
      },
      styleOverrides: {
        colorDefault: {
          background: palette.surfaceContainer.main,
          color: palette.onSurface.main,
        },
        colorPrimary: {
          background: palette.surface.main,
          color: palette.onSurface.main,
        },
      },
    },
  };
};

export const getBadge = (theme) => {
  const { palette } = theme;
  return {
    MuiBadge: {
      defaultProps: { color: 'default' },
      variants: [
        {
          props: { color: 'default' },
          style: {
            '.MuiBadge-badge': {
              backgroundColor: palette.error.main,
              color: palette.onError.main,
            },
          },
        },
      ],
    },
  };
};

export const StateLayer = {
  Hover: 0.08,
  Focus: 0.12,
  Press: 0.12,
  Drag: 0.16,
};

export const getStateLayerColor = (state, containerColor, contentColor) => {
  return hexFromArgb(
    Blend.cam16Ucs(
      argbFromHex(containerColor),
      argbFromHex(contentColor),
      state,
    ),
  );
};

export const getButton = (theme) => {
  const { palette } = theme;
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '30px',
          textTransform: 'none',
          fontWeight: 'bold',
          '&:has(>svg)': {
            padding: '8px',
            borderRadius: '50%',
            minWidth: '1em',
            minHeight: '1em',
          },
        },
      },
      variants: [
        {
          props: { variant: 'elevated' },
          style: {
            boxShadow: theme.shadows[1],
            backgroundColor: palette.surfaceContainerLow.main,
            color: palette.primary.main,
            '&:hover': {
              background: getStateLayerColor(
                StateLayer.Hover,
                palette.surfaceContainerLow.main,
                palette.primary.main,
              ),
              boxShadow: theme.shadows[2],
            },
            '&:focus': {
              background: getStateLayerColor(
                StateLayer.Focus,
                palette.surfaceContainerLow.main,
                palette.primary.main,
              ),
            },
            '&:active': {
              background: getStateLayerColor(
                StateLayer.Press,
                palette.surfaceContainerLow.main,
                palette.primary.main,
              ),
            },
            '&.Mui-disabled': {
              backgroundColor: alpha(palette.onSurface.main, 0.12),
              color: alpha(palette.onSurface.main, 0.38),
              boxShadow: theme.shadows[0],
            },
          },
        },
        {
          props: { variant: 'filled' },
          style: {
            backgroundColor: palette.primary.main,
            color: palette.onPrimary.main,
            boxShadow: theme.shadows[0],
            '&.Mui-disabled': {
              backgroundColor: alpha(palette.onSurface.main, 0.12),
              color: alpha(palette.onSurface.main, 0.38),
              boxShadow: theme.shadows[0],
            },
            '&:hover': {
              backgroundColor: getStateLayerColor(
                StateLayer.Hover,
                palette.primary.main,
                palette.onPrimary.main,
              ),
              boxShadow: theme.shadows[1],
            },
            '&:focus': {
              backgroundColor: getStateLayerColor(
                StateLayer.Focus,
                palette.primary.main,
                palette.onPrimary.main,
              ),
              boxShadow: theme.shadows[0],
            },
            '&:active': {
              backgroundColor: getStateLayerColor(
                StateLayer.Press,
                palette.primary.main,
                palette.onPrimary.main,
              ),
              boxShadow: theme.shadows[0],
            },
          },
        },
        {
          props: { variant: 'tonal' },
          style: {
            backgroundColor: palette.secondaryContainer.main,
            color: palette.onSecondaryContainer.main,
            boxShadow: theme.shadows[0],
            '&.Mui-disabled': {
              backgroundColor: alpha(palette.onSurface.main, 0.12),
              color: alpha(palette.onSurface.main, 0.38),
              boxShadow: theme.shadows[0],
            },
            '&:hover': {
              backgroundColor: getStateLayerColor(
                StateLayer.Hover,
                palette.secondaryContainer.main,
                palette.onSecondaryContainer.main,
              ),
              boxShadow: theme.shadows[1],
            },
            '&:focus': {
              backgroundColor: getStateLayerColor(
                StateLayer.Focus,
                palette.secondaryContainer.main,
                palette.onSecondaryContainer.main,
              ),
              boxShadow: theme.shadows[0],
            },
            '&:active': {
              backgroundColor: getStateLayerColor(
                StateLayer.Press,
                palette.secondaryContainer.main,
                palette.onSecondaryContainer.main,
              ),
              boxShadow: theme.shadows[0],
            },
          },
        },
        {
          props: { variant: 'outlined' },
          style: {
            color: palette.primary.main,
            borderColor: palette.outline.main,
            borderWidth: '1px',
            boxShadow: theme.shadows[0],
            '&.Mui-disabled': {
              borderColor: alpha(palette.onSurface.main, 0.12),
              color: alpha(palette.onSurface.main, 0.38),
            },
            '&:hover': {
              backgroundColor: getStateLayerColor(
                StateLayer.Hover,
                palette.surface.main,
                palette.primary.main,
              ),
              borderColor: getStateLayerColor(
                StateLayer.Hover,
                palette.outline.main,
                palette.primary.main,
              ),
            },
            '&:focus': {
              backgroundColor: getStateLayerColor(
                StateLayer.Focus,
                palette.surface.main,
                palette.primary.main,
              ),
              borderColor: getStateLayerColor(
                StateLayer.Focus,
                palette.primary.main,
                palette.primary.main,
              ),
            },
            '&:active': {
              backgroundColor: getStateLayerColor(
                StateLayer.Press,
                palette.surface.main,
                palette.primary.main,
              ),
              borderColor: getStateLayerColor(
                StateLayer.Press,
                palette.outline.main,
                palette.primary.main,
              ),
            },
          },
        },
        {
          props: { variant: 'text' },
          style: {
            backgroundColor: 'transparent',
            color: palette.primary.main,
            boxShadow: theme.shadows[0],
            padding: '5px 15px',
            '&.Mui-disabled': {
              color: alpha(palette.onSurface.main, 0.38),
            },
            '&:hover': {
              backgroundColor: getStateLayerColor(
                StateLayer.Hover,
                palette.surface.main,
                palette.primary.main,
              ),
            },
            '&:focus': {
              backgroundColor: getStateLayerColor(
                StateLayer.Focus,
                palette.surface.main,
                palette.primary.main,
              ),
            },
            '&:active': {
              backgroundColor: getStateLayerColor(
                StateLayer.Press,
                palette.surface.main,
                palette.primary.main,
              ),
            },
          },
        },
      ],
    },
  };
};

export const getCard = (theme) => {
  const { palette } = theme;
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          padding: '10px 6px',
        },
      },
      variants: [
        {
          props: { variant: 'elevation' },
          style: {
            boxShadow: theme.shadows[1],
            backgroundColor: palette.surfaceContainerLow.main,
            transition: theme.transitions.create(
              ['background-color', 'box-shadow', 'border-color', 'color'],
              {
                duration: theme.transitions.duration.short,
              },
            ),
            '&:hover': {
              background: getStateLayerColor(
                StateLayer.Hover,
                palette.surfaceContainerLow.main,
                palette.primary.main,
              ),
              boxShadow: theme.shadows[2],
            },
            '&:focus': {
              boxShadow: theme.shadows[1],
              background: getStateLayerColor(
                StateLayer.Focus,
                palette.surfaceContainerLow.main,
                palette.primary.main,
              ),
            },
            '&:active': {
              boxShadow: theme.shadows[1],
              background: getStateLayerColor(
                StateLayer.Press,
                palette.surfaceContainerLow.main,
                palette.primary.main,
              ),
            },
            '&.Mui-disabled': {
              backgroundColor: alpha(palette.surfaceContainerLow.main, 0.38),
              color: palette.surfaceVariant.main,
              boxShadow: theme.shadows[0],
            },
          },
        },
        {
          props: { variant: 'filled' },
          style: {
            boxShadow: theme.shadows[0],
            backgroundColor: palette.surfaceContainerHighest.main,
            transition: theme.transitions.create(
              ['background-color', 'box-shadow', 'border-color', 'color'],
              {
                duration: theme.transitions.duration.short,
              },
            ),
            '&:hover': {
              background: getStateLayerColor(
                StateLayer.Hover,
                palette.surfaceContainerHighest.main,
                palette.primary.main,
              ),
              boxShadow: theme.shadows[1],
            },
            '&:focus': {
              boxShadow: theme.shadows[0],
              background: getStateLayerColor(
                StateLayer.Focus,
                palette.surfaceContainerHighest.main,
                palette.primary.main,
              ),
            },
            '&:active': {
              boxShadow: theme.shadows[1],
              background: getStateLayerColor(
                StateLayer.Press,
                palette.surfaceContainerHighest.main,
                palette.primary.main,
              ),
            },
            '&.Mui-disabled': {
              backgroundColor: alpha(
                palette.surfaceContainerHighest.main,
                0.38,
              ),
              color: palette.surfaceVariant.main,
              boxShadow: theme.shadows[1],
            },
          },
        },
        {
          props: { variant: 'outlined' },
          style: {
            boxShadow: theme.shadows[0],
            backgroundColor: palette.surface.main,
            borderColor: palette.outline.main,
            transition: theme.transitions.create(
              ['background-color', 'box-shadow', 'border-color', 'color'],
              {
                duration: theme.transitions.duration.short,
              },
            ),
            '&:hover': {
              background: getStateLayerColor(
                StateLayer.Hover,
                palette.surface.main,
                palette.primary.main,
              ),
              boxShadow: theme.shadows[1],
            },
            '&:focus': {
              boxShadow: theme.shadows[0],
              background: getStateLayerColor(
                StateLayer.Focus,
                palette.surface.main,
                palette.primary.main,
              ),
            },
            '&:active': {
              boxShadow: theme.shadows[2],
              background: getStateLayerColor(
                StateLayer.Press,
                palette.surfaceContainerHighest.main,
                palette.primary.main,
              ),
            },
            '&.Mui-disabled': {
              borderColor: alpha(palette.surfaceContainerHighest.main, 0.12),
              boxShadow: theme.shadows[0],
            },
          },
        },
      ],
    },
  };
};

export const getDrawer = (theme) => {
  const { palette } = theme;
  return {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          border: '0px',
          background: palette.surfaceContainer.main,
          color: palette.onSurfaceVariant.main,
        },
      },
    },
  };
};

export const getFab = (theme) => {
  const { palette } = theme;
  return {
    MuiFab: {
      defaultProps: { color: 'secondary' },
      styleOverrides: {
        root: {
          boxShadow: theme.shadows[3],
          borderRadius: '18px',
        },
      },
      variants: [
        {
          props: { color: 'primary' },
          style: {
            backgroundColor: palette.primaryContainer.main,
            color: palette.onPrimaryContainer.main,
            '&:hover': {
              background: getStateLayerColor(
                StateLayer.Hover,
                palette.primaryContainer.main,
                palette.onPrimaryContainer.main,
              ),
              boxShadow: theme.shadows[4],
            },
            '&:focus': {
              background: getStateLayerColor(
                StateLayer.Focus,
                palette.primaryContainer.main,
                palette.onPrimaryContainer.main,
              ),
              boxShadow: theme.shadows[3],
            },
            '&:active': {
              background: getStateLayerColor(
                StateLayer.Press,
                palette.primaryContainer.main,
                palette.onPrimaryContainer.main,
              ),
              boxShadow: theme.shadows[3],
            },
          },
        },
        {
          props: { color: 'secondary' },
          style: {
            backgroundColor: palette.secondaryContainer.main,
            color: palette.onSecondaryContainer.main,
            '&:hover': {
              background: getStateLayerColor(
                StateLayer.Hover,
                palette.secondaryContainer.main,
                palette.onSecondaryContainer.main,
              ),
              boxShadow: theme.shadows[4],
            },
            '&:focus': {
              background: getStateLayerColor(
                StateLayer.Focus,
                palette.secondaryContainer.main,
                palette.onSecondaryContainer.main,
              ),
              boxShadow: theme.shadows[3],
            },
            '&:active': {
              background: getStateLayerColor(
                StateLayer.Press,
                palette.secondaryContainer.main,
                palette.onSecondaryContainer.main,
              ),
              boxShadow: theme.shadows[3],
            },
          },
        },
        {
          props: { color: 'surface' },
          style: {
            backgroundColor: palette.surfaceContainer.main,
            color: palette.primary.main,
            '&:hover': {
              background: getStateLayerColor(
                StateLayer.Hover,
                palette.surfaceContainer.main,
                palette.primary.main,
              ),
              boxShadow: theme.shadows[4],
            },
            '&:focus': {
              background: getStateLayerColor(
                StateLayer.Focus,
                palette.surfaceContainer.main,
                palette.primary.main,
              ),
              boxShadow: theme.shadows[3],
            },
            '&:active': {
              background: getStateLayerColor(
                StateLayer.Press,
                palette.surfaceContainer.main,
                palette.primary.main,
              ),
              boxShadow: theme.shadows[3],
            },
          },
        },
        {
          props: { color: 'tertiary' },
          style: {
            backgroundColor: palette.tertiaryContainer.main,
            color: palette.onTertiaryContainer.main,
            '&:hover': {
              background: getStateLayerColor(
                StateLayer.Hover,
                palette.tertiaryContainer.main,
                palette.onTertiaryContainer.main,
              ),
              boxShadow: theme.shadows[4],
            },
            '&:focus': {
              background: getStateLayerColor(
                StateLayer.Focus,
                palette.tertiaryContainer.main,
                palette.onTertiaryContainer.main,
              ),
              boxShadow: theme.shadows[3],
            },
            '&:active': {
              background: getStateLayerColor(
                StateLayer.Press,
                palette.tertiaryContainer.main,
                palette.onTertiaryContainer.main,
              ),
              boxShadow: theme.shadows[3],
            },
          },
        },
      ],
    },
  };
};

export const getListItem = () => {
  return {
    MuiListItem: {
      styleOverrides: {
        root: {
          paddingTop: 1,
          paddingBottom: 1,
          '& .MuiListItemButton-root': {
            paddingTop: 8,
            paddingBottom: 8,
          },
        },
      },
    },
  };
};

export const getListItemButton = (theme) => {
  const { palette } = theme;
  return {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          color: palette.onSurfaceVariant.main,
          '&:hover': {
            backgroundColor: getStateLayerColor(
              StateLayer.Hover,
              palette.surfaceContainerLow.main,
              palette.onSurface.main,
            ),
            color: getStateLayerColor(
              StateLayer.Hover,
              palette.onSurfaceVariant.main,
              palette.onSurface.main,
            ),
          },
          '&:active': {
            backgroundColor: getStateLayerColor(
              StateLayer.Press,
              palette.surfaceContainerLow.main,
              palette.onSecondaryContainer.main,
            ),
            color: getStateLayerColor(
              StateLayer.Press,
              palette.onSurfaceVariant.main,
              palette.onSurface.main,
            ),
          },
          '&.Mui-selected': {
            color: palette.onSecondaryContainer.main,
            background: palette.secondaryContainer.main,
            '& > .MuiListItemText-root > .MuiTypography-root': {
              fontWeight: 'bold',
            },
            '&:hover': {
              backgroundColor: getStateLayerColor(
                StateLayer.Hover,
                palette.secondaryContainer.main,
                palette.onSecondaryContainer.main,
              ),
              color: getStateLayerColor(
                StateLayer.Hover,
                palette.onSecondaryContainer.main,
                palette.secondaryContainer.main,
              ),
            },
            '&:active': {
              backgroundColor: getStateLayerColor(
                StateLayer.Press,
                palette.secondaryContainer.main,
                palette.onSecondaryContainer.main,
              ),
              color: getStateLayerColor(
                StateLayer.Press,
                palette.onSecondaryContainer.main,
                palette.secondaryContainer.main,
              ),
            },
          },
        },
      },
    },
  };
};

export const getListItemIcon = () => {
  return {
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: 'inherit',
          minWidth: 32,
          '&.Mui-selected': {
            fontWeight: 'bold',
          },
        },
      },
    },
  };
};

export const getMenu = (theme) => {
  const { palette } = theme;
  return {
    MuiMenu: {
      defaultProps: { color: 'default' },
      styleOverrides: {
        root: {},
        paper: {
          backgroundColor: palette.surfaceContainerLow.main,
          boxShadow: theme.shadows[3],
          color: palette.onSurface.main,
        },
      },
    },
  };
};

export const getSwitch = (theme) => {
  const { palette } = theme;
  return {
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 42,
          height: 26,
          padding: 0,
          marginLeft: 12,
          marginRight: 8,
          borderColor: palette.outline.main,
          '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 7,
            transitionDuration: '100ms',
            '&.Mui-checked': {
              transform: 'translateX(16px)',
              margin: 4,
              '& + .MuiSwitch-track': {
                backgroundColor: palette.primary.main,
                opacity: 1,
                border: 0,
              },
              '& .MuiSwitch-thumb': {
                color: palette.onPrimary.main,
                width: 18,
                height: 18,
              },
              '&.Mui-disabled + .MuiSwitch-track': {
                backgroundColor: alpha(palette.onSurface.main, 0.1),
              },
              '&.Mui-disabled .MuiSwitch-thumb': {
                color: alpha(palette.surface.main, 0.8),
              },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
              color: palette.primary.main,
              border: `6px solid ${palette.onPrimary.main}`,
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
              color: alpha(palette.onSurface.main, 0.3),
            },
          },
          '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            color: palette.outline.main,
            width: 12,
            height: 12,
            '&:before': {
              content: "''",
              position: 'absolute',
              width: '100%',
              height: '100%',
              left: 0,
              top: 0,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            },
          },
          '& .MuiSwitch-track': {
            borderRadius: 20,
            border: `2px solid ${palette.outline.main}`,
            backgroundColor: palette.surfaceContainerHighest.main,

            opacity: 1,
            transition: 'background .2s',
          },
        },
      },
    },
  };
};

export const getToggleButton = (theme) => {
  const { palette } = theme;
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          textTransform: 'none',
          color: palette.onSurface.main,
          '&.Mui-selected': {
            color: palette.onSecondaryContainer.main,
            backgroundColor: palette.secondaryContainer.main,
          },
          '&.MuiToggleButton-primary': {
            borderColor: 'transparent',
          },
          '&.MuiToggleButton-primary.Mui-selected': {
            color: palette.onPrimary.main,
            backgroundColor: palette.primary.main,
          },
        },
      },
    },
  };
};

export const getToggleButtonGroup = (theme) => {
  const { palette } = theme;
  return {
    MuiToggleButtonGroup: {
      styleOverrides: {
        grouped: {
          borderRadius: '50px',
          borderColor: palette.outline.main,
          '&:not(:first-of-type)': {
            marginLeft: 0,
            borderLeft: 0,
          },
          '&:hover': {
            background: getStateLayerColor(
              StateLayer.Hover,
              palette.surface.main,
              palette.primary.main,
            ),
          },
          '&.Mui-selected:hover': {
            background: getStateLayerColor(
              StateLayer.Hover,
              palette.secondaryContainer.main,
              palette.onSecondaryContainer.main,
            ),
          },
        },
      },
    },
  };
};

export const getTooltip = (theme) => {
  const { palette } = theme;
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          background: palette.inverseSurface.main,
          color: palette.inverseOnSurface.main,
        },
      },
    },
  };
};

export const getTypography = (theme) => {
  const { palette } = theme;
  return {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: palette.text.primary,
        },
      },
    },
  };
};

export const getIconButton = (theme) => {
  const { palette } = theme;

  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          '& .MuiSvgIcon-root': {
            color: palette.text.primary,
          },

          color: palette.text.primary,

          '&:hover': {
            backgroundColor: palette.surfaceContainerHigh.main,
          },

          '&:active': {
            backgroundColor: palette.surfaceContainerHigh.main,
          },
        },
      },
    },
  };
};

export const getSelectBox = (theme) => {
  const { palette } = theme;
  return {
    MuiSelect: {
      styleOverrides: {
        iconOutlined: {
          color: palette.text.primary,
        },
      },
    },
  };
};

export const getOutlinedInput = (theme) => {
  const { palette } = theme;
  return {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            '& .MuiOutlinedInput-input': {
              '-webkit-text-fill-color': palette.text.disabled,
            },
          },

          '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
            borderColor: palette.outlineVariant.main,
          },
        },

        notchedOutline: {
          borderColor: palette.outlineVariant.main,
        },
      },
    },
  };
};
