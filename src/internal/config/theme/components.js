const grommetComponents = {
  icon: {
    size: {
      small: '16px',
      medium: '22px',
      large: '36px',
      xlarge: '96px',
    },
    extend: undefined,
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
    color: 'link',
    hover: {
      textDecoration: 'none',
    },
    extend: (props) => {
      const activeColor = props?.theme?.global?.colors?.['active-link'];
      const hoverColor = props?.theme?.global?.colors?.['hovered-link'];

      return `
        :hover {
          color: ${hoverColor}
        }
        &.active {
          color: ${activeColor}
        }
      `;
    },
  },
  button: {
    primary: {
      background: { color: 'primary-button-color' },
      border: { color: 'primary-button-color', width: '1px', radius: '4px' },
      color: 'primary-button-text-color',
      extend: (props) => {
        return `
          :hover {
            box-shadow: 0px 0px 0px 2px ${props?.theme?.global?.colors?.['primary-button-border-color']};
          }
        `;
      },
    },
    secondary: {
      background: { color: 'secondary-button-color' },
      border: { color: 'secondary-button-color', width: '1px', radius: '4px' },
      color: 'secondary-button-text-color',
      extend: (props) => {
        return `
          :hover {
            box-shadow: 0px 0px 0px 2px ${props?.theme?.global?.colors?.['secondary-button-border-color']};
          }
        `;
      },
    },
    default: {
      background: { color: 'default-button-color' },
      border: {
        color: 'default-button-border-color',
        width: '1px',
        radius: '4px',
      },
      color: 'default-button-text-color',
      extend: (props) => {
        return `
          :hover {
            box-shadow: 0px 0px 0px 2px currentColor;
          }
        `;
      },
    },
    hover: {
      primary: {},
      secondary: {},
      default: {
        border: {
          color: 'default-button-text-color',
        },
      },
    },
    size: {
      small: {
        border: {
          radius: '2px',
        },
      },
      medium: {
        border: {
          radius: '4px',
        },
      },
      large: {
        border: {
          radius: '8px',
        },
      },
    },
  },

  tab: {
    color: 'link',
    active: {
      color: 'active-link',
    },
    hover: {
      color: { light: 'hovered-link' },
    },

    border: {
      color: {
        light: 'transparent',
      },
      active: {
        color: {
          light: 'active-link',
        },
      },
      hover: {
        color: {
          light: 'transparent',
        },
      },
    },
  },
};

const customComponents = {
  appShell: {
    sidebar: {
      background: 'brand-1',
    },
    nav: {
      menu: {
        background: 'brand-1',
      },
      link: {
        color: 'white',
      },
      active: {
        color: 'white',
      },
      icon: {
        color: 'white',
      },
    },
  },
};

const components = {
  ...grommetComponents,
  ...customComponents,
};

export default components;
