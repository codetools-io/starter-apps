import genericColors from './generic-colors';
import components from './components';

const brandColors = {
  brand: '#33415C',
  'brand-0': '#33415C',
  'brand-1': '#33415C',
  'brand-2': '#5C677D',
  'brand-3': '#7D8597',
  'brand-4': '#979DAC',
  'brand-5': '#979DAC',
  'brand-6': '#979DAC',
  'brand-alt-1': '#33415C',
  'brand-alt-2': '#5C677D',
  'brand-alt-3': '#7D8597',
  'brand-alt-4': '#979DAC',
  'brand-contrast': '#EEE',
  'shade-1': '#F8F9FA',
  'shade-2': '#E9ECEF',
  'shade-3': '#DEE2E6',
  'shade-4': '#CED4DA',
  'shade-5': '#ADB5BD',
  'shade-6': '#6C757D',
  'shade-7': '#495057',
  'shade-8': '#343A40',
  'shade-9': '#212529',
  'accent-1': '#06D6A0',
  'accent-2': '#FFD166',
  'accent-3': '#EF476F',
  'accent-4': '#118AB2',
};

export const brand = {
  global: {
    colors: {
      ...brandColors,
      ...genericColors,
      focus: 'brand-alt',
      text: { light: 'brand-3' },
      'text-strong': { light: 'brand-2' },
      'text-weak': { light: 'brand-4' },
      'text-xweak': { light: 'brand-4' },
      border: { light: 'shade-2' },
      icon: {
        dark: 'currentColor',
        light: 'currentColor',
      },
      'selected-text': 'white',
      'selected-background': 'brand',
      'active-text': 'brand-1',
      heading1: `${brandColors['brand-alt-1']}`,
      heading2: `${brandColors['brand-alt-2']}`,
      heading3: `${brandColors['brand-alt-2']}`,
      heading4: `${brandColors['brand-alt-2']}`,
      heading5: `${brandColors['brand-alt-2']}`,
      heading6: `${brandColors['brand-alt-2']}`,
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
    breakpoints: {
      small: {
        value: 800,
        borderSize: {
          xsmall: '1px',
          small: '2px',
          medium: '3px',
          large: '5px',
          xlarge: '10px',
        },
        edgeSize: {
          none: '0px',
          hair: '1px',
          xxsmall: '2px',
          xsmall: '3px',
          small: '5px',
          medium: '10px',
          large: '20px',
          xlarge: '40px',
        },
        size: {
          xxsmall: '20px',
          xsmall: '40px',
          small: '80px',
          medium: '160px',
          large: '320px',
          xlarge: '640px',
          full: '100%',
        },
      },
      medium: {
        value: 1280,
      },
      large: {},
    },
  },
  icon: {
    size: {
      small: '16px',
      medium: '22px',
      large: '36px',
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
      maxWidth: '300px',
    },
    medium: {
      size: '15px',
      height: `${15 * 1.65}px`,
      maxWidth: '600px',
    },
    large: {
      size: '18px',
      height: `${18 * 1.65}px`,
      maxWidth: '600px',
    },
    xlarge: {
      size: '24px',
      height: `${24 * 1.65}px`,
      maxWidth: '600px',
    },
    xxlarge: {
      size: '32px',
      height: `${32 * 1.65}px`,
      maxWidth: '600px',
    },
  },
  select: {
    icons: {
      color: 'text',
    },
  },
  heading: {
    extend: (props) => {
      const headingKey = `heading${props?.level}`;
      const color = props?.theme?.global?.colors?.[headingKey];

      return {
        color,
      };
    },
  },
  layer: {
    overlay: {
      background: 'rgba(51, 65, 92, 0.85)',
    },
  },
  anchor: {
    fontWeight: 400,
    color: 'brand-2',
    hover: {
      color: 'brand-1',
      textDecoration: 'none',
    },
    extend: (props) => {
      const activeColor = props?.theme?.global?.colors?.['brand-1'];

      return `
        :hover {
          color: ${activeColor}
        }
        &.active {
          color: ${activeColor}
        }
      `;
    },
  },
  ...components,
};
