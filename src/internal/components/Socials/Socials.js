import React from 'react';
import { Box, Button, Text } from 'grommet';
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
    <Box direction="row" justify="start" align="center" gap="medium" {...props}>
      {github && (
        <Button
          href={github?.url || GITHUB_URL}
          icon={<Github size={github?.size || 'medium'} />}
          label={
            github?.text ? (
              <Text size={github?.size || 'medium'}>{github?.text}</Text>
            ) : null
          }
          gap="small"
          plain
        />
      )}
      {twitter && (
        <Button
          href={twitter?.url || TWITTER_URL}
          icon={<Twitter size={twitter?.size || 'medium'} />}
          label={
            twitter?.text ? (
              <Text size={twitter?.size || 'medium'}>{twitter?.text}</Text>
            ) : null
          }
          gap="small"
          plain
        />
      )}
      {codeSandbox && (
        <Button
          href={codeSandbox?.url || CODE_SANDBOX_URL}
          icon={<CodeSandbox size={codeSandbox?.size || 'medium'} />}
          label={
            codeSandbox?.text ? (
              <Text size={codeSandbox?.size || 'medium'}>
                {codeSandbox?.text}
              </Text>
            ) : null
          }
          gap="small"
          plain
        />
      )}

      {bookmark && (
        <Button
          icon={
            <Bookmark
              size={bookmark?.size || 'medium'}
              color={bookmark?.color}
            />
          }
          label={
            bookmark?.text ? (
              <Text size={bookmark?.size || 'medium'} color={bookmark?.color}>
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
