import genericColors from './generic-colors';
import shades from './shades';

export default {
  colors: {
    brand: '#EE4266',
    'brand-1': '#EE4266',
    'brand-2': '#EE4266',
    'brand-3': '#EE4266',
    'brand-4': '#EE4266',
    'brand-5': '#EE4266',
    'brand-6': '#EE4266',
    'brand-7': '#EE4266',
    'brand-8': '#EE4266',
    'brand-9': '#EE4266',
    'brand-alt': '#EE4266',
    'brand-alt-1': '#EE4266',
    'brand-alt-2': '#EE4266',
    'brand-alt-3': '#EE4266',
    'brand-alt-4': '#EE4266',
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
