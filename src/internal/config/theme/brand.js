import genericColors from './generic-colors';
import brandColors from './brand-colors-blues';
import shades from './shades';
import components from './components';
export const brand = {
  global: {
    colors: {
      ...brandColors,
      ...genericColors,
      ...shades,
      focus: 'brand-alt',
      text: { light: 'shade-7' },
      'text-strong': { light: 'shade-8' },
      'text-weak': { light: 'shade-6' },
      'text-xweak': { light: 'shade-5' },
      border: { light: 'shade-2' },
      icon: {
        dark: 'currentColor',
        light: 'currentColor',
      },
      'selected-text': 'red',
      'active-text': 'brand-1',
    },
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
    input: {
      padding: '10px',
      weight: 400,
    },
    focus: {
      outline: {
        color: 'transparent',
      },
    },
  },
  icon: {
    size: {
      small: '16px',
      medium: '32px',
      large: '48px',
      xlarge: '96px',
    },
    extend: undefined,
  },
  tab: {
    color: 'text',
    active: {
      color: 'active-text',
    },
    border: {
      color: 'text',
      active: {
        color: 'active-text',
      },
    },
  },
  ...components,
};
