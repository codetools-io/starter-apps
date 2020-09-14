import genericColors from './generic-colors';

export const brand = {
  global: {
    colors: {
      brand: '#0466C8',
      'brand-1': '#057AF0',
      'brand-2': '#0466C8',
      'brand-3': '#0353A4',
      'brand-4': '#023E7D',
      'brand-5': '#002855',
      'brand-6': '#001845',
      'brand-7': '#001233',
      'brand-alt': '#979DAC',
      'brand-alt-1': '#979DAC',
      'brand-alt-2': '#7D8597',
      'brand-alt-3': '#5C677D',
      'brand-alt-4': '#33415C',
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
