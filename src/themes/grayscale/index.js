import React from 'react';
import { ThemeContext } from 'grommet';
import { deepMerge } from 'grommet/utils';
import { base } from 'grommet/themes';
import { theme } from './theme';

const mergedTheme = deepMerge(base, theme);

export default function ParadiseTheme({ children, ...props }) {
  return (
    <ThemeContext.Extend value={mergedTheme} {...props}>
      {children}
    </ThemeContext.Extend>
  );
}
