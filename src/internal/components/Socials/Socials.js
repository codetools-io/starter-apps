import React from 'react';
import { Anchor, Box, Text } from 'grommet';
import { Github } from 'grommet-icons';

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export default function Socials({ ...props }) {
  return (
    <Box direction="row" justify="start" align="center" gap="medium" {...props}>
      <Anchor href={GITHUB_URL} color="text">
        <Box direction="row" align="center" gap="small">
          <Github size="small" />
          <Text size="small">View Source</Text>
        </Box>
      </Anchor>
    </Box>
  );
}
