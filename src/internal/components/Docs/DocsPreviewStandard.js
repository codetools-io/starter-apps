import React from 'react';
import { Box } from 'grommet';

import DocsCard from './DocsCard';
import DocsTheme from './DocsTheme';

export default function DocsPreviewStandard({ children, theme, ...props }) {
  return (
    <Box className="DocsPreviewStandard">
      <DocsCard height="large" flex={false} {...props}>
        <Box overflow="auto" fill>
          <DocsTheme name={theme}>{children}</DocsTheme>
        </Box>
      </DocsCard>
    </Box>
  );
}
