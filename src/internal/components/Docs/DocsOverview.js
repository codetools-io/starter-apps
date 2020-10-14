import React, { useMemo } from 'react';
import { Box, Button, Heading, Paragraph } from 'grommet';
import { CodeSandbox, Github } from 'grommet-icons';
export default function DocsOverview({
  name,
  description,
  githubUrl,
  sandboxUrl,
}) {
  const hasSocials = useMemo(() => {
    return !!githubUrl || !!sandboxUrl;
  }, [githubUrl, sandboxUrl]);

  return (
    <Box gap="small" flex={false}>
      <Heading level={3} margin="none">
        {name}
      </Heading>

      <Paragraph margin="none" fill>
        {description}
      </Paragraph>
      {hasSocials && (
        <Box
          direction="row"
          align="baseline"
          gap="small"
          margin={{ top: 'xsmall' }}
        >
          {sandboxUrl && (
            <Button
              icon={<CodeSandbox />}
              color="control"
              href={sandboxUrl}
              plain
            />
          )}
          {githubUrl && (
            <Button icon={<Github />} color="control" href={githubUrl} plain />
          )}
        </Box>
      )}
    </Box>
  );
}
