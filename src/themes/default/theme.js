import components from './components';
import global from './global';

export const theme = {
  name: 'default',
  rounding: 2,
  spacing: 20,
  defaultMode: 'light',
  global,
  ...components,
};
