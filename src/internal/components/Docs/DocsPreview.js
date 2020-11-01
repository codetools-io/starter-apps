import React, { useEffect, useState } from 'react';
import { Box, Text } from 'grommet';
import { Cubes, Expand } from 'grommet-icons';
import { useLocalStorage } from 'react-use';
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
  const [themeName, setThemeName] = useState(queryParams?.theme || 'default');
  const [theme, setTheme] = useState();
  const [externalThemes, setExternalThemes] = useLocalStorage(
    'externalThemes',
    {}
  );

  useEffect(() => {
    loadActions([
      <ThemePicker
        key="action-theme"
        themeName={themeName}
        themes={Object.keys(externalThemes)}
        onChange={({ value }) => {
          setThemeName(value);
          setQueryParam('theme', value);
        }}
        onImport={({ theme, name, url }) => {
          setThemeName(name);
          setQueryParam('theme', name);
          setExternalThemes({
            ...externalThemes,
            [name]: theme,
          });
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
        tooltip={<Text size="small">Fullscreen</Text>}
        icon={<Expand size="18px" />}
        onClick={() => setIsFullScreen(true)}
        color={isFullScreen ? 'control' : 'text'}
        align={{ bottom: 'top', right: 'right' }}
        title="Fullscreen"
      />,
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [doc, isFullScreen, isOverlayToggled, loadActions, themeName]);

  useEffect(() => {
    if (queryParams?.theme && externalThemes?.[queryParams?.theme]) {
      // setTheme(theme);
      setTheme(externalThemes?.[queryParams?.theme]);
    }
  }, [queryParams, externalThemes]);
  if (isFullScreen) {
    return (
      <Box className="DocsPreview">
        <DocsPreviewModal
          onShrink={() => setIsFullScreen(false)}
          themeName={themeName}
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
      <DocsPreviewStandard themeName={themeName} theme={theme} {...props}>
        {children}
      </DocsPreviewStandard>
    </Box>
  );
}
