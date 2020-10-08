import React from 'react';
import { Box } from 'grommet';

export default function DocsActions({ actions }) {
  if (!actions?.length) {
    return null;
  }

  return (
    <Box direction="row" align="center" gap="medium">
      {actions}
    </Box>
  );
}
