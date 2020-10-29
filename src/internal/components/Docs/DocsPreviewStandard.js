import React from 'react';
import { Box } from 'grommet';

import Theme from 'internal/components/Theme';
import DocsCard from './DocsCard';

export default function DocsPreviewStandard({
  children,
  themeName,
  theme,
  ...props
}) {
  return (
    <Box className="DocsPreviewStandard">
      <DocsCard height="large" flex={false} {...props}>
        <Box overflow="auto" fill>
          <Theme name={themeName} theme={theme}>
            {children}
          </Theme>
        </Box>
      </DocsCard>
    </Box>
  );
}
