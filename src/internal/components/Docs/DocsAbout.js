import React from 'react';
import { Box, Markdown } from 'grommet';

import DocsCard from './DocsCard';

export default function DocsAbout({ doc }) {
  return (
    <Box gap="small" flex={false}>
      <DocsCard>
        <Box pad="medium">
          {doc?.content && <Markdown>{doc?.content}</Markdown>}
        </Box>
      </DocsCard>
    </Box>
  );
}
