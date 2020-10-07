import React from 'react';
import { Box, Markdown } from 'grommet';

import DocsCard from './DocsCard';

export default function DocsAbout({ doc }) {
  return (
    <Box gap="small" flex={false}>
      <DocsCard>
        <Box pad={{ horizontal: 'large', top: 'small', bottom: 'large' }}>
          {doc?.content && (
            <Markdown
              components={{
                p: {
                  component: 'Paragraph',
                  props: { size: 'medium' },
                },
              }}
            >
              {doc?.content}
            </Markdown>
          )}
        </Box>
      </DocsCard>
    </Box>
  );
}
