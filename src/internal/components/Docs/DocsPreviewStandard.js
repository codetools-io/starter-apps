import React from 'react';
import { Box } from 'grommet';

import DocsCard from './DocsCard';
import DocsTheme from './DocsTheme';

export default function DocsPreviewStandard({
  children,
  themeName,
  theme,
  ...props
}) {
  console.log(themeName);
  console.log(theme);
  return (
    <Box className="DocsPreviewStandard">
      <DocsCard height="large" flex={false} {...props}>
        <Box overflow="auto" fill>
          <DocsTheme name={themeName} theme={theme}>
            {children}
          </DocsTheme>
        </Box>
      </DocsCard>
    </Box>
  );
}
