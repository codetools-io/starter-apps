import { getColor } from './utils';

const grommetComponents = {
  anchor: {
    fontWeight: 400,
    color: 'AnchorColor',
    hover: {
      textDecoration: 'none',
    },
    extend: (props) => {
      return `
        :hover {
          color: ${getColor(props, 'AnchorHoverColor')}
        }
        &.active {
          color: ${getColor(props, 'AnchorActiveColor')}
        }
      `;
    },
  },
  button: {
    default: {
      background: { color: 'ButtonDefaultBackground' },
      border: {
        color: 'ButtonDefaultBorderColor',
        width: '1px',
        radius: '4px',
      },
      color: 'ButtonDefaultColor',
      extend: (props) => {
        const color = getColor(props, 'ButtonDefaultHoverBorderColor');
        return `
          :hover {
            box-shadow: 0px 0px 0px 1px ${color};
          }
        `;
      },
    },
    primary: {
      background: { color: 'ButtonPrimaryBackground' },
      border: {
        color: 'ButtonPrimaryBorderColor',
        width: '1px',
        radius: '4px',
      },
      color: 'ButtonPrimaryColor',
      extend: (props) => {
        const color = getColor(props, 'ButtonPrimaryHoverBorderColor');
        return `
          :hover {
            box-shadow: 0px 0px 0px 1px ${color};
          }
        `;
      },
    },
    secondary: {
      background: { color: 'ButtonSecondaryBackground' },
      border: {
        color: 'ButtonSecondaryBorderColor',
        width: '1px',
        radius: '4px',
      },
      color: 'ButtonSecondaryColor',
      extend: (props) => {
        const color = getColor(props, 'ButtonSecondaryHoverBorderColor');
        return `
          :hover {
            box-shadow: 0px 0px 0px 1px ${color};
          }
        `;
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
  checkBox: {
    color: 'CheckBoxCheckedBorderColor',
    border: {
      color: 'CheckBoxBorderColor',
      width: '1px',
    },
    check: {
      thickness: '2px',
      radius: '4px',
    },
    hover: {
      border: {
        color: 'CheckBoxHoverBorderColor',
      },
    },
  },
  heading: {
    extend: (props) => {
      return {
        color: getColor(props, `Heading${props?.level}Color`),
      };
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
  layer: {
    overlay: {
      background: 'LayerOverlayBackground',
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
  tab: {
    color: 'TabColor',
    active: {
      color: 'TabActiveColor',
    },
    hover: {
      // color: { light: 'TabHoverColor' },
      color: 'TabHoverColor',
    },

    border: {
      // color: {
      //   light: 'TabBorderColor',
      // },
      color: 'TabBorderColor',
      active: {
        // color: {
        //   light: 'TabActiveBorderColor',
        // },
        color: 'TabActiveBorderColor',
      },
      hover: {
        // color: {
        //   light: 'TabHoverBorderColor',
        // },
        color: 'TabHoverBorderColor',
      },
    },
  },
};

const customComponents = {
  appShell: {
    sidebar: {
      background: 'AppShellSidebarBackgroundColor',
    },
    nav: {
      menu: {
        background: 'AppShellNavMenuBackgroundColor',
      },
      link: {
        color: 'AppShellNavLinkColor',
      },
      active: {
        color: 'AppShellNavActiveColor',
      },
      icon: {
        color: 'AppShellNavIconColor',
      },
    },
  },
};

const components = {
  ...grommetComponents,
  ...customComponents,
};

export default components;
