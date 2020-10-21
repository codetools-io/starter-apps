import genericColors from './generic-colors';
import shades from './shades';

export default {
  colors: {
    brand: '#3BCEAC',
    'brand-1': '#3BCEAC',
    'brand-2': '#3BCEAC',
    'brand-3': '#3BCEAC',
    'brand-4': '#3BCEAC',
    'brand-5': '#3BCEAC',
    'brand-6': '#3BCEAC',
    'brand-7': '#3BCEAC',
    'brand-8': '#3BCEAC',
    'brand-9': '#3BCEAC',
    'brand-alt': '#3BCEAC',
    'brand-alt-1': '#3BCEAC',
    'brand-alt-2': '#3BCEAC',
    'brand-alt-3': '#3BCEAC',
    'brand-alt-4': '#3BCEAC',
    'brand-contrast': '#EEE',
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
    ...genericColors,
    ...shades,
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
  control: {
    border: {
      color: 'shade-3',
    },
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
};
