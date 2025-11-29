import { createTheme } from '@mui/material/styles';

export const softBlueTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#F9FAFB',
      paper: '#FFFFFF',
    },
    primary: {
      main: '#2563EB',
      light: '#3B82F6',
      dark: '#1D4ED8',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#F59E0B',
      light: '#FBBF24',
      dark: '#B45309',
    },
    text: {
      primary: '#1F2937',
      secondary: '#4B5563',
    },
    divider: '#E5E7EB',
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h5: {
      fontWeight: 600,
      color: '#1F2937',
    },
    h6: {
      fontWeight: 500,
      color: '#1F2937',
    },
    body1: {
      color: '#475569',
    },
    body2: {
      color: '#475569',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: '0 3px 10px rgba(0,0,0,0.08)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: '0 3px 10px rgba(0,0,0,0.08)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          textTransform: 'none',
        },
        containedPrimary: {
          boxShadow: '0 3px 6px rgba(37, 99, 235, 0.3)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRight: '1px solid #E5E7EB',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          '&:hover': {
            backgroundColor: '#F3F7F9',
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          h6: 'h6',
          body1: 'p',
          body2: 'p',
        },
      },
    },
  },
});

export const softGreenTheme = createTheme({
  palette: {
    mode: 'light',
    background: { default: '#F0FDF4', paper: '#FFFFFF' },
    primary: { main: '#22C55E', light: '#4ADE80', dark: '#15803D', contrastText: '#FFFFFF' },
    secondary: { main: '#10B981', light: '#34D399', dark: '#047857' },
    text: { primary: '#1F2937', secondary: '#4B5563' },
    divider: '#D1FAE5',
  },
  shape: { borderRadius: 8 },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h5: { fontWeight: 600, color: '#1F2937' },
    h6: { fontWeight: 500, color: '#1F2937' },
    body1: { color: '#475569' },
    body2: { color: '#475569' },
  },
  components: {
    MuiAppBar: { styleOverrides: { root: { boxShadow: '0 2px 4px rgba(0,0,0,0.08)' } } },
    MuiPaper: {
      styleOverrides: { root: { borderRadius: 8, boxShadow: '0 3px 10px rgba(0,0,0,0.08)' } },
    },
    MuiCard: {
      styleOverrides: { root: { borderRadius: 8, boxShadow: '0 3px 10px rgba(0,0,0,0.08)' } },
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 6, textTransform: 'none' },
        containedPrimary: { boxShadow: '0 3px 6px rgba(34,197,94,0.3)' },
      },
    },
    MuiDrawer: { styleOverrides: { paper: { borderRight: '1px solid #D1FAE5' } } },
    MuiListItem: {
      styleOverrides: { root: { borderRadius: 6, '&:hover': { backgroundColor: '#ECFDF5' } } },
    },
    MuiListItemButton: { styleOverrides: { root: { borderRadius: 6 } } },
  },
});

export const coralPinkTheme = createTheme({
  palette: {
    mode: 'light',
    background: { default: '#FFF5F5', paper: '#FFFFFF' },
    primary: { main: '#EF4444', light: '#F87171', dark: '#B91C1C', contrastText: '#FFFFFF' },
    secondary: { main: '#FECACA', light: '#FCA5A5', dark: '#B91C1C' },
    text: { primary: '#1F2937', secondary: '#4B5563' },
    divider: '#FECACA',
  },
  shape: { borderRadius: 8 },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h5: { fontWeight: 600 },
    h6: { fontWeight: 500 },
  },
  components: {
    MuiAppBar: { styleOverrides: { root: { boxShadow: '0 2px 4px rgba(0,0,0,0.08)' } } },
    MuiPaper: {
      styleOverrides: { root: { borderRadius: 8, boxShadow: '0 3px 10px rgba(0,0,0,0.08)' } },
    },
    MuiCard: {
      styleOverrides: { root: { borderRadius: 8, boxShadow: '0 3px 10px rgba(0,0,0,0.08)' } },
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 6, textTransform: 'none' },
        containedPrimary: { boxShadow: '0 3px 6px rgba(239,68,68,0.3)' },
      },
    },
    MuiDrawer: { styleOverrides: { paper: { borderRight: '1px solid #FECACA' } } },
    MuiListItem: {
      styleOverrides: { root: { borderRadius: 6, '&:hover': { backgroundColor: '#FFE4E6' } } },
    },
    MuiListItemButton: { styleOverrides: { root: { borderRadius: 6 } } },
  },
});

export const goldenAmberTheme = createTheme({
  palette: {
    mode: 'light',
    background: { default: '#FFFDF5', paper: '#FFFFFF' },
    primary: { main: '#F59E0B', light: '#FBBF24', dark: '#B45309', contrastText: '#FFFFFF' },
    secondary: { main: '#FCD34D', light: '#FDE68A', dark: '#B45309' },
    text: { primary: '#1F2937', secondary: '#4B5563' },
    divider: '#FDE68A',
  },
  shape: { borderRadius: 8 },
  typography: { fontFamily: "'Inter', sans-serif" },
  components: {
    MuiAppBar: { styleOverrides: { root: { boxShadow: '0 2px 4px rgba(0,0,0,0.08)' } } },
    MuiPaper: {
      styleOverrides: { root: { borderRadius: 8, boxShadow: '0 3px 10px rgba(0,0,0,0.08)' } },
    },
    MuiCard: {
      styleOverrides: { root: { borderRadius: 8, boxShadow: '0 3px 10px rgba(0,0,0,0.08)' } },
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 6, textTransform: 'none' },
        containedPrimary: { boxShadow: '0 3px 6px rgba(245,158,11,0.3)' },
      },
    },
    MuiDrawer: { styleOverrides: { paper: { borderRight: '1px solid #FDE68A' } } },
    MuiListItem: {
      styleOverrides: { root: { borderRadius: 6, '&:hover': { backgroundColor: '#FEF3C7' } } },
    },
    MuiListItemButton: { styleOverrides: { root: { borderRadius: 6 } } },
  },
});

export const midnightBlueDarkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: { default: '#0F172A', paper: '#1E293B' },
    primary: { main: '#2563EB', light: '#3B82F6', dark: '#1D4ED8', contrastText: '#FFFFFF' },
    secondary: { main: '#F59E0B', light: '#FBBF24', dark: '#B45309' },
    text: { primary: '#E2E8F0', secondary: '#94A3B8' },
    divider: '#334155',
  },
  shape: { borderRadius: 8 },
  typography: { fontFamily: "'Inter', sans-serif" },
  components: {
    MuiAppBar: { styleOverrides: { root: { boxShadow: '0 2px 4px rgba(0,0,0,0.3)' } } },
    MuiPaper: {
      styleOverrides: { root: { borderRadius: 8, boxShadow: '0 3px 10px rgba(0,0,0,0.3)' } },
    },
    MuiCard: {
      styleOverrides: { root: { borderRadius: 8, boxShadow: '0 3px 10px rgba(0,0,0,0.3)' } },
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 6, textTransform: 'none' },
        containedPrimary: { boxShadow: '0 3px 6px rgba(37,99,235,0.5)' },
      },
    },
    MuiDrawer: { styleOverrides: { paper: { borderRight: '1px solid #334155' } } },
    MuiListItem: {
      styleOverrides: { root: { borderRadius: 6, '&:hover': { backgroundColor: '#1E293B' } } },
    },
    MuiListItemButton: { styleOverrides: { root: { borderRadius: 6 } } },
  },
});

export const charcoalDarkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: { default: '#121212', paper: '#1A1A1A' },
    primary: { main: '#BB86FC', light: '#EFB7FF', dark: '#8856C8', contrastText: '#FFFFFF' },
    secondary: { main: '#03DAC6', light: '#66FFF9', dark: '#00A896' },
    text: { primary: '#E0E0E0', secondary: '#A0A0A0' },
    divider: '#2C2C2C',
  },
  shape: { borderRadius: 8 },
  typography: { fontFamily: "'Inter', sans-serif" },
  components: {
    MuiAppBar: { styleOverrides: { root: { boxShadow: '0 2px 4px rgba(0,0,0,0.4)' } } },
    MuiPaper: {
      styleOverrides: { root: { borderRadius: 8, boxShadow: '0 3px 10px rgba(0,0,0,0.4)' } },
    },
    MuiCard: {
      styleOverrides: { root: { borderRadius: 8, boxShadow: '0 3px 10px rgba(0,0,0,0.4)' } },
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 6, textTransform: 'none' },
        containedPrimary: { boxShadow: '0 3px 6px rgba(187,134,252,0.5)' },
      },
    },
    MuiDrawer: { styleOverrides: { paper: { borderRight: '1px solid #2C2C2C' } } },
    MuiListItem: {
      styleOverrides: { root: { borderRadius: 6, '&:hover': { backgroundColor: '#1A1A1A' } } },
    },
    MuiListItemButton: { styleOverrides: { root: { borderRadius: 6 } } },
  },
});

export const warmGrayTheme = createTheme({
  palette: {
    mode: 'light',
    background: { default: '#F7F6F3', paper: '#FFFFFF' },
    primary: { main: '#8B5CF6', light: '#A78BFA', dark: '#6D28D9', contrastText: '#FFFFFF' },
    secondary: { main: '#FBBF24', light: '#FCD34D', dark: '#B45309' },
    text: { primary: '#1F2937', secondary: '#4B5563' },
    divider: '#E5E7EB',
  },
  shape: { borderRadius: 10 },
  typography: { fontFamily: "'Inter', sans-serif" },
  components: {
    MuiAppBar: { styleOverrides: { root: { boxShadow: '0 2px 4px rgba(0,0,0,0.08)' } } },
    MuiPaper: {
      styleOverrides: { root: { borderRadius: 10, boxShadow: '0 3px 10px rgba(0,0,0,0.08)' } },
    },
    MuiCard: {
      styleOverrides: { root: { borderRadius: 10, boxShadow: '0 3px 10px rgba(0,0,0,0.08)' } },
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 8, textTransform: 'none' },
        containedPrimary: { boxShadow: '0 3px 6px rgba(139,92,246,0.3)' },
      },
    },
    MuiDrawer: { styleOverrides: { paper: { borderRight: '1px solid #E5E7EB' } } },
    MuiListItem: {
      styleOverrides: { root: { borderRadius: 6, '&:hover': { backgroundColor: '#F3F4F6' } } },
    },
    MuiListItemButton: { styleOverrides: { root: { borderRadius: 6 } } },
  },
});

export const softTealTheme = createTheme({
  palette: {
    mode: 'dark',
    background: { default: '#1F2A2F', paper: '#2C3A3F' },
    primary: { main: '#38B2AC', light: '#4FD1C5', dark: '#2C7A7B', contrastText: '#FFFFFF' },
    secondary: { main: '#68D391', light: '#9AE6B4', dark: '#2F855A' },
    text: { primary: '#E6F1F3', secondary: '#A0AEC0' },
    divider: '#4A5568',
  },
  shape: { borderRadius: 8 },
  typography: { fontFamily: "'Inter', sans-serif" },
  components: {
    MuiAppBar: { styleOverrides: { root: { boxShadow: '0 2px 4px rgba(0,0,0,0.3)' } } },
    MuiPaper: {
      styleOverrides: { root: { borderRadius: 8, boxShadow: '0 3px 10px rgba(0,0,0,0.3)' } },
    },
    MuiCard: {
      styleOverrides: { root: { borderRadius: 8, boxShadow: '0 3px 10px rgba(0,0,0,0.3)' } },
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 6, textTransform: 'none' },
        containedPrimary: { boxShadow: '0 3px 6px rgba(56,178,172,0.5)' },
      },
    },
    MuiDrawer: { styleOverrides: { paper: { borderRight: '1px solid #4A5568' } } },
    MuiListItem: {
      styleOverrides: { root: { borderRadius: 6, '&:hover': { backgroundColor: '#2C3A3F' } } },
    },
    MuiListItemButton: { styleOverrides: { root: { borderRadius: 6 } } },
  },
});

export const slateBlueTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#F4F6FA', // soft off-white
      paper: '#FFFFFF',
    },
    primary: {
      main: '#5C6AC4', // muted slate blue
      light: '#7B8DDC',
      dark: '#3B44A6',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#F472B6', // soft pink
      light: '#F9A8D4',
      dark: '#C026D3',
    },
    text: {
      primary: '#1E293B',
      secondary: '#475569',
    },
    divider: '#CBD5E1',
  },
  shape: { borderRadius: 10 },
  typography: { fontFamily: "'Inter', sans-serif" },
  components: {
    MuiAppBar: {
      styleOverrides: { root: { boxShadow: '0 2px 4px rgba(0,0,0,0.08)' } },
    },
    MuiPaper: {
      styleOverrides: { root: { borderRadius: 10, boxShadow: '0 3px 10px rgba(0,0,0,0.08)' } },
    },
    MuiCard: {
      styleOverrides: { root: { borderRadius: 10, boxShadow: '0 3px 10px rgba(0,0,0,0.08)' } },
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 8, textTransform: 'none' },
        containedPrimary: { boxShadow: '0 3px 6px rgba(92,106,196,0.3)' },
      },
    },
    MuiDrawer: { styleOverrides: { paper: { borderRight: '1px solid #CBD5E1' } } },
    MuiListItem: {
      styleOverrides: { root: { borderRadius: 6, '&:hover': { backgroundColor: '#E2E8F0' } } },
    },
    MuiListItemButton: { styleOverrides: { root: { borderRadius: 6 } } },
  },
});

export const slateBlueDarkishTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#E8EDF7', // slightly darker off-white
      paper: '#F0F3FA', // darker paper
    },
    primary: {
      main: '#4A57A1', // darker muted slate blue
      light: '#6875C1',
      dark: '#2F3980',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#D65C9F', // slightly darker pink
      light: '#E58DBA',
      dark: '#A01C70',
    },
    text: {
      primary: '#1B2536', // darker primary text
      secondary: '#3F4B5A', // darker secondary text
    },
    divider: '#A1B0C0',
  },
  shape: { borderRadius: 10 },
  typography: { fontFamily: "'Inter', sans-serif" },
  components: {
    MuiAppBar: {
      styleOverrides: { root: { boxShadow: '0 2px 4px rgba(0,0,0,0.1)' } },
    },
    MuiPaper: {
      styleOverrides: { root: { borderRadius: 10, boxShadow: '0 3px 10px rgba(0,0,0,0.1)' } },
    },
    MuiCard: {
      styleOverrides: { root: { borderRadius: 10, boxShadow: '0 3px 10px rgba(0,0,0,0.1)' } },
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 8, textTransform: 'none' },
        containedPrimary: { boxShadow: '0 3px 6px rgba(74,87,161,0.3)' },
      },
    },
    MuiDrawer: { styleOverrides: { paper: { borderRight: '1px solid #A1B0C0' } } },
    MuiListItem: {
      styleOverrides: { root: { borderRadius: 6, '&:hover': { backgroundColor: '#DDE2EB' } } },
    },
    MuiListItemButton: { styleOverrides: { root: { borderRadius: 6 } } },
  },
});

// Darker version of Slate Blue Theme
export const slateBlueDarkerTheme2 = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#D6DCEE', // darker off-white
      paper: '#E0E6F2', // darker paper
    },
    primary: {
      main: '#3B4687', // deeper slate blue
      light: '#5A66AB',
      dark: '#1F2557',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#C0488C', // deeper pink
      light: '#DB7BAF',
      dark: '#8F145F',
    },
    text: {
      primary: '#161F2D', // darker primary text
      secondary: '#374151', // darker secondary text
    },
    divider: '#8A97B0',
  },
  shape: { borderRadius: 10 },
  typography: { fontFamily: "'Inter', sans-serif" },
  components: {
    MuiAppBar: { styleOverrides: { root: { boxShadow: '0 2px 4px rgba(0,0,0,0.12)' } } },
    MuiPaper: {
      styleOverrides: { root: { borderRadius: 10, boxShadow: '0 3px 10px rgba(0,0,0,0.12)' } },
    },
    MuiCard: {
      styleOverrides: { root: { borderRadius: 10, boxShadow: '0 3px 10px rgba(0,0,0,0.12)' } },
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 8, textTransform: 'none' },
        containedPrimary: { boxShadow: '0 3px 6px rgba(59,70,135,0.35)' },
      },
    },
    MuiDrawer: { styleOverrides: { paper: { borderRight: '1px solid #8A97B0' } } },
    MuiListItem: {
      styleOverrides: { root: { borderRadius: 6, '&:hover': { backgroundColor: '#CCD3E3' } } },
    },
    MuiListItemButton: { styleOverrides: { root: { borderRadius: 6 } } },
  },
});

// Neutral Grey Theme
export const neutralGreyTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#E5E5E5', // soft grey background
      paper: '#F5F5F5', // grey paper
    },
    primary: {
      main: '#6B7280', // grey primary
      light: '#9CA3AF',
      dark: '#4B5563',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#9CA3AF', // grey secondary
      light: '#D1D5DB',
      dark: '#6B7280',
    },
    text: {
      primary: '#1F2937', // readable text
      secondary: '#4B5563',
    },
    divider: '#D1D5DB',
  },
  shape: { borderRadius: 10 },
  typography: { fontFamily: "'Inter', sans-serif" },
  components: {
    MuiAppBar: { styleOverrides: { root: { boxShadow: '0 2px 4px rgba(0,0,0,0.1)' } } },
    MuiPaper: {
      styleOverrides: { root: { borderRadius: 10, boxShadow: '0 3px 10px rgba(0,0,0,0.1)' } },
    },
    MuiCard: {
      styleOverrides: { root: { borderRadius: 10, boxShadow: '0 3px 10px rgba(0,0,0,0.1)' } },
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 8, textTransform: 'none' },
        containedPrimary: { boxShadow: '0 3px 6px rgba(107,114,128,0.35)' },
      },
    },
    MuiDrawer: { styleOverrides: { paper: { borderRight: '1px solid #D1D5DB' } } },
    MuiListItem: {
      styleOverrides: { root: { borderRadius: 6, '&:hover': { backgroundColor: '#D9D9D9' } } },
    },
    MuiListItemButton: { styleOverrides: { root: { borderRadius: 6 } } },
  },
});
