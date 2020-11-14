import components from './components';
import colors from './colors';
import breakpoints from './breakpoints';

export const theme = {
  name: 'StarterApps',
  rounding: 2,
  spacing: 20,
  defaultMode: 'light',
  global: {
    colors,
    font: {
      family: 'Montserrat',
      size: '15px',
      height: '20px',
      maxWidth: '300px',
    },
    active: {
      background: 'active-background',
      color: 'active-text',
    },
    hover: {
      background: 'active-background',
      color: 'active-text',
    },
    selected: {
      background: 'selected-background',
      color: 'selected-text',
    },
    control: {
      border: {
        radius: '2px',
      },
    },
    drop: {
      border: {
        radius: '2px',
      },
    },
    borderSize: {
      xsmall: '1px',
      small: '2px',
      medium: '3px',
      large: '10px',
      xlarge: '20px',
    },
    breakpoints,
    edgeSize: {
      none: '0px',
      hair: '1px',
      xxsmall: '3px',
      xsmall: '5px',
      small: '10px',
      medium: '20px',
      large: '40px',
      xlarge: '80px',
      responsiveBreakpoint: 'small',
    },
    input: {
      padding: '10px',
      weight: 400,
    },
    spacing: '20px',
    size: {
      xxsmall: '40px',
      xsmall: '80px',
      small: '160px',
      medium: '320px',
      large: '640px',
      xlarge: '960px',
      xxlarge: '1280px',
      full: '100%',
    },
    focus: {
      outline: {
        color: 'transparent',
      },
    },
  },
  ...components,
};
