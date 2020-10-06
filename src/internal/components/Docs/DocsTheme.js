import React from 'react';
import { ThemeContext } from 'grommet';

import theme from './theme';

export default function DocsTheme({ children, ...props }) {
  return (
    <ThemeContext.Extend value={theme} {...props}>
      {children}
    </ThemeContext.Extend>
  );
}
