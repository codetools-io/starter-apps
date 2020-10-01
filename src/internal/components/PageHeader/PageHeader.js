import React from 'react';
import { Anchor, Box, Heading, Paragraph } from 'grommet';

import { Github } from 'grommet-icons';

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export default function PageHeader({ title, description }) {
  return (
    <Box flex={false} gap="large">
      <Box direction="row" justify="end" flex={false}>
        <Anchor href={GITHUB_URL} color="text">
          <Github size="medium" />
        </Anchor>
      </Box>
      <Box gap="small" flex={false}>
        <Heading level={1} margin="none">
          {title}
        </Heading>
        <Paragraph margin="none" fill>
          {description}
        </Paragraph>
      </Box>
    </Box>
  );
}
