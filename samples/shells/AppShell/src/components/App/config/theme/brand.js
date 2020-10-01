import genericColors from './generic-colors';

export const brand = {
  global: {
    colors: {
      brand: '#20232a',
      'brand-1': '#20232a',
      'brand-2': '#20232a',
      'brand-3': '#20232a',
      'brand-4': '#20232a',
      'brand-5': '#20232a',
      'brand-6': '#20232a',
      'brand-7': '#20232a',
      'brand-alt': '#61dafb',
      'brand-alt-1': '#61dafb',
      'brand-alt-2': '#61dafb',
      'brand-alt-3': '#61dafb',
      'brand-alt-4': '#61dafb',
      'brand-contrast': '#EEE',
      focus: 'brand-1',
      text: { light: 'brand-alt-3' },
      'text-strong': { light: 'brand-alt-4' },
      'text-weak': { light: 'brand-alt-2' },
      'text-xweak': { light: 'brand-alt-1' },
      border: { light: '#eee' },
      icon: {
        dark: 'currentColor',
        light: 'currentColor',
      },
      ...genericColors,
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
      small: '18px',
      medium: '22px',
      large: '48px',
      xlarge: '96px',
    },
    extend: undefined,
  },
};
