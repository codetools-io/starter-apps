import components from './components';
import global from './global';

export const theme = {
  name: 'grayscale',
  rounding: 2,
  spacing: 20,
  defaultMode: 'light',
  global,
  ...components,
};
