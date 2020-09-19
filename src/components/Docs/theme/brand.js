import genericColors from './generic-colors';

export const brand = {
  global: {
    colors: {
      brand: '#212529',
      'brand-1': '#212529',
      'brand-2': '#343A40',
      'brand-3': '#495057',
      'brand-4': '#6C757D',
      'brand-5': '#ADB5BD',
      'brand-6': '#CED4DA',
      'brand-7': '#DEE2E6',
      'brand-8': '#E9ECEF',
      'brand-9': '#F8F9FA',
      'brand-alt': '#2A9D8F',
      'brand-alt-1': '#2A9D8F',
      'brand-alt-2': '#2A9D8F',
      'brand-alt-3': '#2A9D8F',
      'brand-alt-4': '#2A9D8F',
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
