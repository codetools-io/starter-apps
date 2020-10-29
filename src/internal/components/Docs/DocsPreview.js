import React, { useEffect, useState } from 'react';
import { Box, Text } from 'grommet';
import { Cubes, Expand } from 'grommet-icons';
import useRouter from 'internal/hooks/useRouter';
import TooltipButton from 'internal/components/TooltipButton';
import ThemePicker from 'internal/components/ThemePicker';
import DocsPreviewModal from './DocsPreviewModal';
import DocsPreviewStandard from './DocsPreviewStandard';
import DocsComponents from './DocsComponents';

export default function DocsPreview({ children, doc, loadActions, ...props }) {
  const { queryParams, setQueryParam } = useRouter();
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isOverlayToggled, setIsOverlayToggled] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(
    queryParams?.theme || 'default'
  );
  const [theme, setTheme] = useState();

  useEffect(() => {
    loadActions([
      <ThemePicker
        key="action-theme"
        currentTheme={currentTheme}
        onChange={({ value }) => {
          setCurrentTheme(value);
          setQueryParam('theme', value);
        }}
        onImport={({ theme }) => {
          setTheme(theme);
          setCurrentTheme(theme?.name);
          setQueryParam('theme', theme?.name);
        }}
      />,
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
          themeName={currentTheme}
          theme={theme}
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
      <DocsPreviewStandard themeName={currentTheme} theme={theme} {...props}>
        {children}
      </DocsPreviewStandard>
    </Box>
  );
}
