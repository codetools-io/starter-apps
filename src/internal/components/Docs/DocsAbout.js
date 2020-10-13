import React from 'react';
import { Box, Markdown, Heading, Paragraph } from 'grommet';

import DocsCard from './DocsCard';

function DocsAboutInlineCode({ children }) {
  return (
    <Box style={{ display: 'inline' }} pad={{ horizontal: 'xsmall' }} border>
      <code>{children}</code>
    </Box>
  );
}
export default function DocsAbout({ doc }) {
  return (
    <Box gap="small" flex={false}>
      <DocsCard>
        <Box pad={{ horizontal: 'large', top: 'small', bottom: 'large' }}>
          {doc?.content && (
            <Markdown
              components={{
                h1: { component: Heading, props: { level: 1 } },
                h2: { component: Heading, props: { level: 2 } },
                h3: { component: Heading, props: { level: 3 } },
                h4: { component: Heading, props: { level: 4 } },
                h5: { component: Heading, props: { level: 5 } },
                h6: { component: Heading, props: { level: 6 } },
                p: {
                  component: Paragraph,
                  props: { size: 'medium', fill: true },
                },
                code: {
                  component: DocsAboutInlineCode,
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
