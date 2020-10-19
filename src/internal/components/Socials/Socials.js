import React from 'react';
import { Anchor, Box } from 'grommet';
import { CodeSandbox, Github, Twitter } from 'grommet-icons';

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const TWITTER_URL = process.env.REACT_APP_TWITTER_URL;
const CODE_SANDBOX_URL = process.env.REACT_APP_CODE_SANDBOX_URL;

export default function Socials({
  github = false,
  githubUrl = GITHUB_URL,
  twitter = false,
  twitterUrl = TWITTER_URL,
  codeSandbox = false,
  codeSandboxUrl = CODE_SANDBOX_URL,
  ...props
}) {
  return (
    <Box direction="row" justify="start" align="center" gap="medium" {...props}>
      {github && (
        <Anchor href={githubUrl}>
          <Github />
        </Anchor>
      )}
      {twitter && (
        <Anchor href={twitterUrl}>
          <Twitter />
        </Anchor>
      )}
      {codeSandbox && (
        <Anchor href={codeSandboxUrl}>
          <CodeSandbox />
        </Anchor>
      )}
    </Box>
  );
}
