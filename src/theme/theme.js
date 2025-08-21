import { createTheme } from '@mui/material/styles';

// Professional nude color palette based on requirements
const lightPalette = {
  primary: {
    main: '#03122F', // Deep navy
    light: '#19305C',
    dark: '#02091A',
  },
  secondary: {
    main: '#F3DADF', // Soft pink nude
    light: '#F8E8EC',
    dark: '#EBC5CC',
  },
  accent: {
    main: '#AE7DAC', // Muted purple
    light: '#C299C0',
    dark: '#8B5F89',
  },
  tertiary: {
    main: '#F1916D', // Warm terracotta
    light: '#F5B08A',
    dark: '#E8724F',
  },
  background: {
    default: '#FEFEFE',
    paper: '#FFFFFF',
    section: '#F9F7F8',
  },
  text: {
    primary: '#03122F',
    secondary: '#413B61',
    muted: '#666666',
  },
  divider: 'rgba(3, 18, 47, 0.12)',
  nude: {
    light: '#F3DADF',
    main: '#AE7DAC',
    dark: '#413B61',
  }
};

const darkPalette = {
  primary: {
    main: '#F3DADF', // Soft pink nude for dark mode
    light: '#F8E8EC',
    dark: '#EBC5CC',
  },
  secondary: {
    main: '#19305C', // Navy blue
    light: '#2B4A7A',
    dark: '#0A1A3E',
  },
  accent: {
    main: '#AE7DAC', // Muted purple
    light: '#C299C0',
    dark: '#8B5F89',
  },
  tertiary: {
    main: '#F1916D', // Warm terracotta
    light: '#F5B08A',
    dark: '#E8724F',
  },
  background: {
    default: '#0F0F0F',
    paper: '#1A1A1A',
    section: '#252525',
  },
  text: {
    primary: '#F3DADF',
    secondary: '#AE7DAC',
    muted: '#999999',
  },
  divider: 'rgba(243, 218, 223, 0.12)',
  nude: {
    light: '#F3DADF',
    main: '#AE7DAC',
    dark: '#413B61',
  }
};

export const createCustomTheme = (mode) => {
  const palette = mode === 'light' ? lightPalette : darkPalette;
  
  return createTheme({
    palette: {
      mode,
      ...palette,
    },
    typography: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 700,
        fontSize: '3.5rem',
        lineHeight: 1.2,
        '@media (max-width:600px)': {
          fontSize: '2.5rem',
        },
      },
      h2: {
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 600,
        fontSize: '2.75rem',
        lineHeight: 1.3,
        '@media (max-width:600px)': {
          fontSize: '2rem',
        },
      },
      h3: {
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 600,
        fontSize: '2.25rem',
        lineHeight: 1.4,
        '@media (max-width:600px)': {
          fontSize: '1.75rem',
        },
      },
      h4: {
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 500,
        fontSize: '1.75rem',
        lineHeight: 1.4,
      },
      h5: {
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 500,
        fontSize: '1.5rem',
        lineHeight: 1.5,
      },
      h6: {
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 500,
        fontSize: '1.25rem',
        lineHeight: 1.5,
      },
      body1: {
        fontFamily: '"Roboto", sans-serif',
        fontSize: '1rem',
        lineHeight: 1.6,
      },
      body2: {
        fontFamily: '"Roboto", sans-serif',
        fontSize: '0.875rem',
        lineHeight: 1.6,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollBehavior: 'smooth',
          },
          '::-webkit-scrollbar': {
            width: '8px',
          },
          '::-webkit-scrollbar-track': {
            background: mode === 'light' ? '#F9F7F8' : '#252525',
          },
          '::-webkit-scrollbar-thumb': {
            background: mode === 'light' ? '#AE7DAC' : '#F3DADF',
            borderRadius: '4px',
          },
          '::-webkit-scrollbar-thumb:hover': {
            background: mode === 'light' ? '#8B5F89' : '#EBC5CC',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            textTransform: 'none',
            fontWeight: 600,
            padding: '12px 28px',
            fontSize: '1rem',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
            },
          },
          contained: {
            background: mode === 'light' 
              ? 'linear-gradient(135deg, #03122F 0%, #19305C 100%)'
              : 'linear-gradient(135deg, #F3DADF 0%, #AE7DAC 100%)',
            color: mode === 'light' ? '#FFFFFF' : '#03122F',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            '&:hover': {
              background: mode === 'light'
                ? 'linear-gradient(135deg, #19305C 0%, #2B4A7A 100%)'
                : 'linear-gradient(135deg, #AE7DAC 0%, #8B5F89 100%)',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
            },
          },
          outlined: {
            borderWidth: '2px',
            borderColor: mode === 'light' ? '#03122F' : '#F3DADF',
            color: mode === 'light' ? '#03122F' : '#F3DADF',
            '&:hover': {
              borderWidth: '2px',
              backgroundColor: mode === 'light' ? 'rgba(3, 18, 47, 0.08)' : 'rgba(243, 218, 223, 0.08)',
              borderColor: mode === 'light' ? '#19305C' : '#AE7DAC',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 20,
            background: mode === 'light' 
              ? 'linear-gradient(145deg, #FFFFFF 0%, #F9F7F8 100%)'
              : 'linear-gradient(145deg, #1A1A1A 0%, #252525 100%)',
            boxShadow: mode === 'light'
              ? '0 8px 32px rgba(3, 18, 47, 0.08), 0 4px 16px rgba(3, 18, 47, 0.04)'
              : '0 8px 32px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(0, 0, 0, 0.2)',
            border: mode === 'light' 
              ? '1px solid rgba(3, 18, 47, 0.05)'
              : '1px solid rgba(243, 218, 223, 0.1)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: mode === 'light'
                ? '0 20px 40px rgba(3, 18, 47, 0.12), 0 8px 24px rgba(3, 18, 47, 0.08)'
                : '0 20px 40px rgba(0, 0, 0, 0.4), 0 8px 24px rgba(0, 0, 0, 0.3)',
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: mode === 'light' 
              ? 'rgba(255, 255, 255, 0.95)' 
              : 'rgba(15, 15, 15, 0.95)',
            backdropFilter: 'blur(20px)',
            boxShadow: mode === 'light'
              ? '0 4px 20px rgba(3, 18, 47, 0.08)'
              : '0 4px 20px rgba(0, 0, 0, 0.3)',
            borderBottom: mode === 'light'
              ? '1px solid rgba(3, 18, 47, 0.05)'
              : '1px solid rgba(243, 218, 223, 0.1)',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            fontWeight: 500,
            background: mode === 'light'
              ? 'linear-gradient(135deg, #F3DADF 0%, #AE7DAC 100%)'
              : 'linear-gradient(135deg, #19305C 0%, #413B61 100%)',
            color: mode === 'light' ? '#03122F' : '#F3DADF',
            border: 'none',
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              borderRadius: 12,
              backgroundColor: mode === 'light' ? '#FFFFFF' : '#1A1A1A',
              '& fieldset': {
                borderColor: mode === 'light' ? 'rgba(3, 18, 47, 0.2)' : 'rgba(243, 218, 223, 0.2)',
                borderWidth: '2px',
              },
              '&:hover fieldset': {
                borderColor: mode === 'light' ? '#AE7DAC' : '#F3DADF',
              },
              '&.Mui-focused fieldset': {
                borderColor: mode === 'light' ? '#03122F' : '#F3DADF',
              },
            },
          },
        },
      },
    },
    spacing: 8,
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });
};
