import { createTheme } from '@mui/material/styles';

// Color palette based on requirements
const lightPalette = {
  primary: {
    main: '#E6D2C7', // Primary nude tone
    light: '#F2E6DD',
    dark: '#D3BBA8',
  },
  secondary: {
    main: '#2D3142', // Dark blue tech accent
    light: '#4F5D75', // Slate
    dark: '#1A1E2E',
  },
  accent: {
    main: '#00A8E8', // Optional tech accent
    light: '#33B9EB',
    dark: '#0088BA',
  },
  background: {
    default: '#FEFCFB',
    paper: '#FFFFFF',
  },
  text: {
    primary: '#2D3142',
    secondary: '#4F5D75',
  },
  nude: {
    light: '#E6D2C7',
    main: '#D3BBA8',
    dark: '#C2A58A',
  }
};

const darkPalette = {
  primary: {
    main: '#D3BBA8',
    light: '#E6D2C7',
    dark: '#C2A58A',
  },
  secondary: {
    main: '#4F5D75',
    light: '#6B7A94',
    dark: '#2D3142',
  },
  accent: {
    main: '#00A8E8',
    light: '#33B9EB',
    dark: '#0088BA',
  },
  background: {
    default: '#1A1E2E',
    paper: '#2D3142',
  },
  text: {
    primary: '#E6D2C7',
    secondary: '#D3BBA8',
  },
  nude: {
    light: '#E6D2C7',
    main: '#D3BBA8',
    dark: '#C2A58A',
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
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none',
            fontWeight: 500,
            padding: '12px 24px',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: mode === 'light' ? 'rgba(255, 255, 255, 0.95)' : 'rgba(26, 30, 46, 0.95)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)',
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
