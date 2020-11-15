import React, { useEffect, useMemo, useState } from 'react';
import { Box, Text } from 'grommet';
import {
  Cubes,
  Expand,
  Monitor,
  PhoneHorizontal,
  PhoneVertical,
  PersonalComputer,
} from 'grommet-icons';
import { useLocalStorage } from 'react-use';
import useRouter from 'internal/hooks/useRouter';
import TooltipButton from 'internal/components/TooltipButton';
import ThemePicker from 'internal/components/ThemePicker';
import DocsPreviewModal from './DocsPreviewModal';
import DocsPreviewStandard from './DocsPreviewStandard';
import DocsComponents from './DocsComponents';

export default function DocsPreview({ children, doc, loadActions, ...props }) {
  const viewportIcons = {
    small: <PhoneVertical />,
    medium: <PhoneHorizontal />,
    large: <PersonalComputer />,
    xlarge: <Monitor />,
  };
  const { queryParams, setQueryParam } = useRouter();
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [viewport, setViewport] = useState();
  const [isOverlayToggled, setIsOverlayToggled] = useState(false);
  const [themeName, setThemeName] = useState(queryParams?.theme || 'default');
  const [theme, setTheme] = useState();
  const [externalThemes, setExternalThemes] = useLocalStorage(
    'externalThemes',
    {}
  );
  const cardSize = useMemo(() => {
    if (!viewport) {
      return { height: 'large' };
    }

    return { height: 'large', width: viewport };
  }, [viewport]);

  function toggleViewport(viewportSize) {
    if (viewport === viewportSize) {
      setViewport(null);
    } else {
      setViewport(viewportSize);
    }
  }

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
          color={
            isOverlayToggled ? 'default-button-text' : 'default-button-border'
          }
          align={{ bottom: 'top', right: 'right' }}
        />
      ),
      doc?.viewports?.map((v) => (
        <TooltipButton
          key={`action-viewport-${v}`}
          className={`DocsPreviewActionViewport`}
          tooltip={<Text size="small">{`${v} view`}</Text>}
          icon={viewportIcons[v]}
          onClick={() => toggleViewport(v)}
          color={viewport === v ? 'control' : 'text'}
          align={{ bottom: 'top', right: 'right' }}
        />
      )),
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
  }, [doc, isFullScreen, isOverlayToggled, viewport, loadActions, themeName]);

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
