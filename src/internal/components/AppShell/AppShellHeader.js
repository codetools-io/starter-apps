import React from 'react';
import { Anchor, Box } from 'grommet';
import { Github, Twitter } from 'grommet-icons';

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const TWITTER_URL = process.env.REACT_APP_TWITTER_URL;

export default function AppShellHeader() {
  return (
    <Box
      gridArea="header"
      direction="row"
      justify="end"
      background="light-1"
      pad={{ horizontal: 'large', vertical: 'medium' }}
      gap="medium"
    >
      <Anchor href={GITHUB_URL} color="text">
        <Github />
      </Anchor>
      <Anchor href={TWITTER_URL} color="text">
        <Twitter />
      </Anchor>
    </Box>
  );
}
