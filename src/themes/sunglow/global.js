import genericColors from './generic-colors';
import shades from './shades';

export default {
  colors: {
    brand: '#FFD23F',
    'brand-1': '#FFD23F',
    'brand-2': '#FFD23F',
    'brand-3': '#FFD23F',
    'brand-4': '#FFD23F',
    'brand-5': '#FFD23F',
    'brand-6': '#FFD23F',
    'brand-7': '#FFD23F',
    'brand-8': '#FFD23F',
    'brand-9': '#FFD23F',
    'brand-alt': '#FFD23F',
    'brand-alt-1': '#FFD23F',
    'brand-alt-2': '#FFD23F',
    'brand-alt-3': '#FFD23F',
    'brand-alt-4': '#FFD23F',
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
