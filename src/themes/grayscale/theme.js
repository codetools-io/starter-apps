import React from 'react';
import { ThemeContext } from 'grommet';
import { deepMerge } from 'grommet/utils';
import { base } from 'grommet/themes';
import { themeExport } from './theme-export';
import { brand } from './brand';

const theme = deepMerge(base, themeExport, brand);

export default function GrayscaleTheme({ children, ...props }) {
  return (
    <ThemeContext.Extend value={theme} {...props}>
      {children}
    </ThemeContext.Extend>
  );
}
