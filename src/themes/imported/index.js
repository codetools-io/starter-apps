import React from 'react';
import { ThemeContext } from 'grommet';
import { deepMerge } from 'grommet/utils';
import { base } from 'grommet/themes';

export default function ImportedTheme({
  children,
  name,
  theme = {},
  ...props
}) {
  return (
    <ThemeContext.Extend value={deepMerge(base, theme)} {...props}>
      {children}
    </ThemeContext.Extend>
  );
}
