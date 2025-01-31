'use client'
import { extendTheme } from '@mui/joy/styles'
import Color from 'color'

export const minContentHeight = '75dvh'
const surface = 'rgb(0, 0, 0, 0.8)'
const popup = '#1C6399'
const primary = '#72C5E5'
const neutral = '#021722'
const success = '#2cb67d'
const warning = '#FEE75C'
const danger = '#ED4245'
const text = {
  primary: '#fff',
  secondary: '#ccc',
  icon: '#72C5E5',
}

const hexToPalette = (hex: string) => {
  const color = Color(hex)
  return {
    50: color.lighten(0.9).hex(),
    100: color.lighten(0.8).hex(),
    200: color.lighten(0.6).hex(),
    300: color.lighten(0.4).hex(),
    400: color.lighten(0.2).hex(),
    500: color.hex(),
    600: color.darken(0.1).hex(),
    700: color.darken(0.2).hex(),
    800: color.darken(0.3).hex(),
    900: color.darken(0.4).hex(),
    // Active Backgrounds
    outlinedActiveBg: color.fade(0.9).rgb().string(),
    plainActiveBg: color.fade(0.9).rgb().string(),
    softActiveBg: color.fade(0.9).rgb().string(),
    solidActiveBg: color.fade(0.9).rgb().string(),
    // Active Colors
    outlinedActiveColor: text.primary,
    plainHoverColor: text.primary,
    softHoverColor: text.primary,
    solidHoverColor: text.primary,
    // Default Backgrounds
    softBg: color.fade(0.9).rgb().string(),
  }
}

const palette = {
  background: {
    surface,
    popup,
    tooltip: Color(surface).darken(0.2).hex(),
    level1: Color(surface).lighten(0.2).hex(),
    level2: Color(surface).lighten(0.4).hex(),
    level3: Color(surface).lighten(0.6).hex(),
  },
  text,
  primary: hexToPalette(primary),
  neutral: hexToPalette(neutral),
  success: hexToPalette(success),
  warning: hexToPalette(warning),
  danger: hexToPalette(danger),
}

export const theme = extendTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 900,
      lg: 1200,
      xl: 1600,
    },
  },
  colorSchemes: {
    dark: {
      palette,
    },
  },
  components: {
    JoyScopedCssBaseline: {
      styleOverrides: {
        root: {},
      },
    },
    JoyChip: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          '& .MuiChip-action': {
            '&:hover': {
              backgroundColor: palette[ownerState.color!].plainActiveBg,
              color: text.primary,
            },
          },
        }),
      },
    },
    JoyMenuItem: {
      styleOverrides: {
        root: () => ({
          color: palette.text.primary,
        }),
      },
    },
    JoyModalDialog: {
      styleOverrides: {
        root: () => ({
          padding: 0,
        }),
      },
    },
    JoyDialogContent: {
      styleOverrides: {
        root: () => ({
          maxWidth: 600,
        }),
      },
    },
    JoyIconButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.color === 'neutral' && {
            '&:hover': {
              color: text.primary,
            },
          }),
        }),
      },
    },
    JoyTabList: {
      styleOverrides: {
        root: () => ({
          borderRadius: 0,
        }),
      },
    },
    JoyTypography: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          // Header Fonts
          ...(['h1', 'h2', 'h3', 'h4'].includes(ownerState.level || '') && {
            fontWeight: 700,
          }),
          // Body Fonts
          ...(['body-lg', 'body-md', 'body-sm'].includes(
            ownerState.level || ''
          ) && {}),
          // Title Fonts
          ...(['title-lg', 'title-md', 'title-sm'].includes(
            ownerState.level || ''
          ) && {
            letterSpacing: '1px',
          }),
          // Links
          '& a': {
            color: text.primary,
            textDecoration: 'none',
          },
          '& a:hover': {
            color: palette.primary[500],
          },
        }),
      },
    },
    JoyTab: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          '&:hover .MuiSvgIcon-root,&:hover .MuiTypography-root': {
            color: text.primary,
          },
          ...(ownerState.selected && {
            color: text.primary,
            '&:after': {
              backgroundColor: primary,
            },
          }),
        }),
      },
    },
  },
  fontFamily: {
    body: 'Space Mono, monospace',
  },
  fontSize: {
    xs: '0.85rem',
    sm: '1.0rem',
    md: '1.15rem',
    lg: '1.3rem',
    xl: '1.45rem',
    xl2: '1.6rem',
    xl3: '1.75rem',
    xl4: '1.9rem',
  },
  shadow: {
    xs: 'none',
    sm: 'none',
    md: 'none',
    lg: 'none',
    xl: 'none',
  },
})
