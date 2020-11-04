import React, { useEffect, useMemo, useState } from 'react';
import { Box, Text } from 'grommet';
import { Cubes, Expand, Monitor, PhoneVertical } from 'grommet-icons';
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
  const [isMobile, setIsMobile] = useState(false);
  const [isOverlayToggled, setIsOverlayToggled] = useState(false);
  const [themeName, setThemeName] = useState(queryParams?.theme || 'default');
  const [theme, setTheme] = useState();
  const [externalThemes, setExternalThemes] = useLocalStorage(
    'externalThemes',
    {}
  );
  const cardSize = useMemo(() => {
    if (!isMobile) {
      return { height: 'large' };
    }

    return { alignSelf: 'center', height: 'large', width: 'small' };
  }, [isMobile]);

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
          tooltip={<Text size="small">component view</Text>}
          icon={<Cubes />}
          onClick={() => setIsOverlayToggled(!isOverlayToggled)}
          color={isOverlayToggled ? 'control' : 'text'}
          align={{ bottom: 'top', right: 'right' }}
        />
      ),
      doc?.components && (
        <TooltipButton
          key="action-mobile"
          className="DocsPreviewActionMobile"
          tooltip={<Text size="small">mobile view</Text>}
          icon={<PhoneVertical />}
          onClick={() => setIsMobile(!isMobile)}
          color={isMobile ? 'control' : 'text'}
          align={{ bottom: 'top', right: 'right' }}
        />
      ),
      doc?.components && (
        <TooltipButton
          key="action-desktop"
          className="DocsPreviewActionDesktop"
          tooltip={<Text size="small">desktop view</Text>}
          icon={<Monitor />}
          onClick={() => setIsMobile(!isMobile)}
          color={!isMobile ? 'control' : 'text'}
          align={{ bottom: 'top', right: 'right' }}
        />
      ),
      <TooltipButton
        key="action-fullscreen"
        className="DocsPreviewActionFullscreen"
        tooltip={<Text size="small">fullscreen view</Text>}
        icon={<Expand size="18px" />}
        onClick={() => setIsFullScreen(true)}
        color={isFullScreen ? 'control' : 'text'}
        align={{ bottom: 'top', right: 'right' }}
        title="Fullscreen"
      />,
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [doc, isFullScreen, isOverlayToggled, isMobile, loadActions, themeName]);

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
          {...cardSize}
        >
          {children}
        </DocsPreviewModal>
      </Box>
    );
  }

  if (isOverlayToggled) {
    return (
      <Box className="DocsPreview">
        <DocsComponents children={children} doc={doc} {...cardSize} />
      </Box>
    );
  }

  return (
    <Box className="DocsPreview">
      <DocsPreviewStandard
        themeName={themeName}
        theme={theme}
        {...cardSize}
        {...props}
      >
        {children}
      </DocsPreviewStandard>
    </Box>
  );
}
