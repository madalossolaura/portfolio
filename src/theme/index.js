import typographyVariants from './typographyVariants';

export const colors = {
  background: {
    light: {
      color: '#FFFFFF',
    },
    main: {
      color: '#F0F0F0',
    },
  },
  borders: {
    main: {
      color: '#F1F1F1',
    },
  },
  primary: {
    main: {
      color: '#EF6461',
      contrastText: '#555555',
    },
  },
  secondary: {
    main: {
      color: '#555555',
      contrastText: '#ffffff',
    },
  },
  tertiary: {
    main: {
      color: '#ff739a',
      contrastText: '#555555',
    },
    light: {
      color: '#ff739a',
      contrastText: '#ffffff',
    },
  },
  modes: {
    dark: {},
  },
};

export default {
  colors,
  typographyVariants,
  breakpoints: {
    xs: 0,
    sm: 480,
    md: 762,
    lg: 992,
    xl: 1200,
  },
  borderRadius: '12px',
  transition: '200ms ease-in-out',
  fontFamily: '\'Open Sans\', sans-serif',
  fontFamilySecondary: '\'Open Sans Condensed\', sans-serif',
};
