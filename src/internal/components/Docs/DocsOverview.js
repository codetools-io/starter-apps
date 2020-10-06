import React from 'react';
import { Box, Heading, Paragraph } from 'grommet';

export default function DocsOverview({ name, description }) {
  return (
    <Box gap="small" flex={false}>
      <Heading level={3} margin="none">
        {name}
      </Heading>
      <Paragraph margin="none" fill>
        {description}
      </Paragraph>
    </Box>
  );
}
