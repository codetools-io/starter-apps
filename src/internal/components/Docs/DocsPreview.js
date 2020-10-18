import React, { useEffect, useState } from 'react';
import { Box, Text } from 'grommet';
import { Cubes, Expand } from 'grommet-icons';
import DocsPreviewModal from './DocsPreviewModal';
import DocsPreviewStandard from './DocsPreviewStandard';
import DocsComponents from './DocsComponents';
import TooltipButton from 'internal/components/TooltipButton';

export default function DocsPreview({ children, doc, loadActions, ...props }) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isOverlayToggled, setIsOverlayToggled] = useState(false);
  useEffect(() => {
    loadActions([
      <TooltipButton
        key="action-fullscreen"
        tooltip={<Text size="small">Fullscreen View</Text>}
        icon={<Expand size="18px" />}
        onClick={() => setIsFullScreen(true)}
        color={isFullScreen ? 'control' : 'text'}
        align={{ bottom: 'top', right: 'right' }}
      />,
      doc?.components && (
        <TooltipButton
          key="action-overlay"
          tooltip={<Text size="small">Component View</Text>}
          icon={<Cubes />}
          onClick={() => setIsOverlayToggled(!isOverlayToggled)}
          color={isOverlayToggled ? 'control' : 'text'}
          align={{ bottom: 'top', right: 'right' }}
        />
      ),
    ]);
  }, [doc, isFullScreen, isOverlayToggled, loadActions]);

  if (isFullScreen) {
    return (
      <Box className="DocsPreview">
        <DocsPreviewModal onShrink={() => setIsFullScreen(false)}>
          {children}
        </DocsPreviewModal>
      </Box>
    );
  }

  if (isOverlayToggled) {
    return (
      <Box className="DocsPreview">
        <DocsComponents children={children} doc={doc} />
      </Box>
    );
  }

  return (
    <Box className="DocsPreview">
      <DocsPreviewStandard {...props}>{children}</DocsPreviewStandard>
    </Box>
  );
}
