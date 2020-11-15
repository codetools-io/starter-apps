import React from 'react';
import { Box, Anchor, Button, Text } from 'grommet';
import { Bookmark, CodeSandbox, Github, Twitter } from 'grommet-icons';

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const TWITTER_URL = process.env.REACT_APP_TWITTER_URL;
const CODE_SANDBOX_URL = process.env.REACT_APP_CODE_SANDBOX_URL;

export default function Socials({
  bookmark = false,
  codeSandbox = false,
  github = false,
  twitter = false,
  ...props
}) {
  return (
    <Box
      direction="row"
      justify="start"
      align="baseline"
      gap="medium"
      {...props}
    >
      {github && (
        <Anchor
          href={github?.url || GITHUB_URL}
          icon={<Github size={github?.size || 'small'} />}
          label={
            github?.text ? (
              <Text size={github?.size || 'small'}>{github?.text}</Text>
            ) : null
          }
          gap="small"
        />
      )}
      {twitter && (
        <Anchor
          href={twitter?.url || TWITTER_URL}
          icon={<Twitter size={twitter?.size || 'small'} />}
          label={
            twitter?.text ? (
              <Text size={twitter?.size || 'small'}>{twitter?.text}</Text>
            ) : null
          }
          gap="small"
        />
      )}
      {codeSandbox && (
        <Anchor
          href={codeSandbox?.url || CODE_SANDBOX_URL}
          icon={<CodeSandbox size={codeSandbox?.size || 'small'} />}
          label={
            codeSandbox?.text ? (
              <Text size={codeSandbox?.size || 'small'}>
                {codeSandbox?.text}
              </Text>
            ) : null
          }
          gap="small"
        />
      )}

      {bookmark && (
        <Button
          icon={<Bookmark size={bookmark?.size || 'small'} color="link" />}
          label={
            bookmark?.text ? (
              <Text size={bookmark?.size || 'small'} color="link">
                {bookmark?.text}
              </Text>
            ) : null
          }
          gap="small"
          onClick={bookmark?.onClick}
          plain
        />
      )}
    </Box>
  );
}
