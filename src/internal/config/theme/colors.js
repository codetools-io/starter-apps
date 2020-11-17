const brand = {
  color1: '#00a6fb',
  color2: '#0582ca',
  color3: '#006494',
  color4: '#003554',
  color5: '#051923',
  shade1: '#F8F9FA',
  shade2: '#E9ECEF',
  shade3: '#DEE2E6',
  shade4: '#CED4DA',
  shade5: '#ADB5BD',
  shade6: '#6C757D',
  shade7: '#495057',
  shade8: '#343A40',
  shade9: '#212529',
};

const genericColors = {
  aqua: '#7fdbff',
  blue: '#0074d9',
  lime: '#01ff70',
  navy: '#001f3f',
  teal: '#39cccc',
  olive: '#3d9970',
  green: '#2ecc40',
  red: '#ff4136',
  maroon: '#85144b',
  orange: '#ff851b',
  purple: '#b10dc9',
  yellow: '#ffdc00',
  fuchsia: '#f012be',
  gray: '#aaaaaa',
  white: '#ffffff',
  black: '#111111',
  silver: '#dddddd',
};

const colors = {
  ...genericColors,
  brand: brand.color1,
  'brand-contrast': '#EEE',
  text: { light: brand.shade7 },
  'text-strong': { light: brand.shade8 },
  'text-weak': { light: brand.shade9 },
  'text-xweak': { light: brand.shade5 },
  border: brand.shade2,
  control: brand.shade5,
  'active-background': brand.shade2,
  'active-text': brand.shade7,
  'hovered-background': brand.shade2,
  'hovered-text': brand.shade7,
  'selected-background': brand.shade1,
  'selected-text': brand.shade7,
  'status-critical': '#FF4040',
  'status-warning': '#FFAA15',
  'status-ok': '#00C781',
  'status-unknown': '#CCCCCC',
  'status-disabled': '#CCCCCC',
  'graph-0': 'brand',
  'graph-1': 'status-warning',
  focus: 'aqua',
  icon: {
    dark: 'currentColor',
    light: 'currentColor',
  },

  // Grommet Components
  Heading1Color: brand.shade9,
  Heading2Color: brand.shade8,
  Heading3Color: brand.shade8,
  Heading4Color: brand.shade8,
  Heading5Color: brand.shade8,
  Heading6Color: brand.shade8,

  AnchorColor: brand.color2,
  AnchorActiveColor: brand.color3,
  AnchorHoverColor: brand.color4,

  ButtonDefaultBackground: 'transparent',
  ButtonDefaultBorderColor: brand.shade5,
  ButtonDefaultColor: brand.shade6,
  ButtonDefaultHoverBorderColor: brand.shade5,

  ButtonPrimaryBackground: brand.color1,
  ButtonPrimaryBorderColor: brand.color1,
  ButtonPrimaryColor: 'white',
  ButtonPrimaryHoverBorderColor: brand.color1,

  ButtonSecondaryBackground: brand.shade5,
  ButtonSecondaryBorderColor: brand.shade5,
  ButtonSecondaryColor: 'white',
  ButtonSecondaryHoverBorderColor: brand.shade5,

  CheckBoxBorderColor: brand.shade5,
  CheckBoxCheckedBorderColor: brand.shade6,
  CheckBoxHoverBorderColor: brand.shade6,

  LayerOverlayBackground: `${brand.shade9}88`,

  SelectIconsColor: brand.shade5,

  TabColor: brand.shade5,
  TabActiveColor: brand.shade6,
  TabHoverColor: brand.shade7,
  TabBorderColor: brand.shade5,
  TabActiveBorderColor: brand.color2,
  TabHoverBorderColor: brand.color3,

  // Custom Components
  AppShellSidebarBackgroundColor: brand.shade9,
  AppShellNavMenuBackgroundColor: brand.shade9,
  AppShellNavLinkColor: 'white',
  AppShellNavActiveColor: 'white',
  AppShellNavIconColor: 'white',

  DocsCodeBorderColor: brand.shade1,
  DocsCodeTabBackgroundColor: 'white',
  DocsCodeTabActiveBackgroundColor: brand.shade1,
  DocsCodeTabBorderColor: brand.shade1,
  DocsCodeTabActiveBorderColor: brand.shade1,

  DocsDomainBackgroundColor: 'white',
  DocsDomainAlternateBackgroundColor: brand.shade1,

  DocsPreviewButtonColor: brand.shade5,
  DocsPreviewButtonToggledColor: brand.shade6,

  DocsPropsItemBackgroundColor: 'white',
  DocsPropsItemAlternateBackgroundColor: brand.shade1,
  DocsPropsDescriptionColor: brand.shade8,
  DocsPropsReturnColor: brand.shade9,

  DocsThemeBorderColor: brand.shade1,
  DocsThemeTabBackgroundColor: 'white',
  DocsThemeTabActiveBackgroundColor: brand.shade1,
  DocsThemeTabBorderColor: brand.shade1,
  DocsThemeTabActiveBorderColor: brand.shade1,

  TooltipButtonBackgroundColor: brand.shade2,

  SocialsColor: brand.shade5,
  SocialsHoverColor: brand.shade6,
};

export default colors;
