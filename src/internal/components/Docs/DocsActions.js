import React from 'react';
import { Box, Button } from 'grommet';
import { CodeSandbox, Expand, Github } from 'grommet-icons';

export default function DocsActions({ githubUrl, sandboxUrl, onExpand }) {
  return (
    <Box direction="row" align="center" gap="medium">
      {onExpand && (
        <Button
          onClick={onExpand}
          icon={<Expand size="small" />}
          color="control"
          plain
        />
      )}
      {sandboxUrl && (
        <Button
          icon={<CodeSandbox size="22px" />}
          color="control"
          href={sandboxUrl}
          plain
        />
      )}
      {githubUrl && (
        <Button
          icon={<Github size="22px" />}
          color="control"
          href={githubUrl}
          plain
        />
      )}
    </Box>
  );
}
