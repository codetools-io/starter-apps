import React from 'react';
import { Box } from 'grommet';

import DocsCard from './DocsCard';
import DocsTheme from './DocsTheme';

export default function DocsPreviewStandard({ children, ...props }) {
  return (
    <Box className="DocsPreviewStandard">
      <DocsCard height="large" flex={false} {...props}>
        <Box overflow="auto" fill>
          <DocsTheme>{children}</DocsTheme>
        </Box>
      </DocsCard>
    </Box>
  );
}
