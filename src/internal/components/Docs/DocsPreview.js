import React, { useEffect, useState } from 'react';
import { Text } from 'grommet';
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
        tooltip={<Text size="small">Fullscreen View</Text>}
        icon={<Expand size="18px" />}
        onClick={() => setIsFullScreen(true)}
        color={isFullScreen ? 'control' : 'text'}
        align={{ bottom: 'top', right: 'right' }}
      />,
      doc?.components && (
        <TooltipButton
          tooltip={<Text size="small">Component View</Text>}
          icon={<Cubes size="22px" />}
          onClick={() => setIsOverlayToggled(!isOverlayToggled)}
          color={isOverlayToggled ? 'control' : 'text'}
          align={{ bottom: 'top', right: 'right' }}
        />
      ),
    ]);
  }, [doc, isFullScreen, isOverlayToggled, loadActions]);

  if (isFullScreen) {
    return (
      <DocsPreviewModal onShrink={() => setIsFullScreen(false)}>
        {children}
      </DocsPreviewModal>
    );
  }

  if (isOverlayToggled) {
    return <DocsComponents children={children} doc={doc} />;
  }

  return (
    <DocsPreviewStandard onExpand={() => setIsFullScreen(true)}>
      {children}
    </DocsPreviewStandard>
  );
}
