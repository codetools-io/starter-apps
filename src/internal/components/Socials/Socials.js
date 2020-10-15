import React from 'react';
import { Anchor, Box } from 'grommet';
import { Github, Twitter } from 'grommet-icons';

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const TWITTER_URL = process.env.REACT_APP_TWITTER_URL;

export default function Socials({ ...props }) {
  return (
    <Box direction="row" justify="start" align="center" gap="medium" {...props}>
      <Anchor href={GITHUB_URL} color="text">
        <Github />
      </Anchor>
      <Anchor href={TWITTER_URL} color="text">
        <Twitter />
      </Anchor>
    </Box>
  );
}
