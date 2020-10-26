import React, { useEffect, useState } from 'react';
import { Box, Select, Text } from 'grommet';
import { Cubes, Expand } from 'grommet-icons';
import useRouter from 'internal/hooks/useRouter';
import TooltipButton from 'internal/components/TooltipButton';
import DocsPreviewModal from './DocsPreviewModal';
import DocsPreviewStandard from './DocsPreviewStandard';
import DocsComponents from './DocsComponents';
const themeOptions = ['caribbean', 'default', 'paradise', 'sunglow'];
export default function DocsPreview({ children, doc, loadActions, ...props }) {
  const { queryParams, setQueryParam } = useRouter();
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isOverlayToggled, setIsOverlayToggled] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(
    queryParams?.theme || 'default'
  );
  useEffect(() => {
    loadActions([
      <Box key="action-theme" className="DocsPreviewActionTheme">
        <Text color="text-xweak" size="small" margin={{ top: '-1rem' }}>
          theme
        </Text>
        <Select
          options={themeOptions}
          value={currentTheme}
          onChange={({ value }) => {
            setCurrentTheme(value);
            setQueryParam('theme', value);
          }}
        />
      </Box>,
      doc?.components && (
        <TooltipButton
          key="action-overlay"
          className="DocsPreviewActionOverlay"
          tooltip={<Text size="small">Component View</Text>}
          icon={<Cubes />}
          onClick={() => setIsOverlayToggled(!isOverlayToggled)}
          color={isOverlayToggled ? 'control' : 'text'}
          align={{ bottom: 'top', right: 'right' }}
        />
      ),
      <TooltipButton
        key="action-fullscreen"
        className="DocsPreviewActionFullscreen"
        tooltip={<Text size="small">Fullscreen View</Text>}
        icon={<Expand size="18px" />}
        onClick={() => setIsFullScreen(true)}
        color={isFullScreen ? 'control' : 'text'}
        align={{ bottom: 'top', right: 'right' }}
        title="Fullscreen View"
      />,
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [doc, isFullScreen, isOverlayToggled, loadActions, currentTheme]);

  if (isFullScreen) {
    return (
      <Box className="DocsPreview">
        <DocsPreviewModal
          onShrink={() => setIsFullScreen(false)}
          theme={currentTheme}
        >
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
      <DocsPreviewStandard theme={currentTheme} {...props}>
        {children}
      </DocsPreviewStandard>
    </Box>
  );
}
