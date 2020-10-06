import React from 'react';
import { Box } from 'grommet';
import DocsPreviewModal from './DocsPreviewModal';
import DocsCard from './DocsCard';
export default function DocsPreview({
  children,
  fullScreen = false,
  onShrink = () => {},
  ...props
}) {
  if (fullScreen) {
    return <DocsPreviewModal onShrink={onShrink}>{children}</DocsPreviewModal>;
  }

  return (
    <DocsCard height="large" flex={false} {...props}>
      <Box overflow="auto" fill>
        {children}
      </Box>
    </DocsCard>
  );
}
