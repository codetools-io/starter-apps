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
      medium: '22px',
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
  paragraph: {
    small: {
      size: '13px',
      height: `${13 * 1.65}px`,
      maxWidth: '267px',
    },
    medium: {
      size: '15px',
      height: `${15 * 1.65}px`,
      maxWidth: '300px',
    },
    large: {
      size: '18px',
      height: `${18 * 1.65}px`,
      maxWidth: '367px',
    },
    xlarge: {
      size: '22px',
      height: `${22 * 1.65}px`,
      maxWidth: '433px',
    },
    xxlarge: {
      size: '28px',
      height: `${28 * 1.65}px`,
      maxWidth: '567px',
    },
  },
  ...components,
};
