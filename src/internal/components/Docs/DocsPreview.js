import React, { useEffect, useMemo, useState } from 'react';
import {
  Box,
  Button,
  Heading,
  Select,
  Text,
  Layer,
  MaskedInput,
} from 'grommet';
import { Cubes, Expand } from 'grommet-icons';
import useRouter from 'internal/hooks/useRouter';
import TooltipButton from 'internal/components/TooltipButton';
import DocsPreviewModal from './DocsPreviewModal';
import DocsPreviewStandard from './DocsPreviewStandard';
import DocsComponents from './DocsComponents';

function ThemePicker({
  currentTheme,
  onChange = () => {},
  onImport = () => {},
}) {
  const [themeOptions, setThemeOptions] = useState([
    'caribbean',
    'default',
    'paradise',
    'sunglow',
  ]);
  const [inputValue, setInputValue] = useState('');
  const [importingTheme, setImportingTheme] = useState(false);
  const showImport = useMemo(() => {
    return currentTheme === 'import…' && !importingTheme;
  }, [currentTheme, importingTheme]);

  function addTheme(themeName) {
    if (!themeOptions?.includes(themeName)) {
      setThemeOptions([...themeOptions, themeName]);
    }
  }

  function importTheme(url) {
    setImportingTheme(true);

    fetch(`${url}`)
      .then((res) => {
        if (res?.status !== 200) {
          throw new Error('Could not retrieve the theme');
        }

        return res.json();
      })
      .then((data) => {
        addTheme(data?.name);
        onImport({ theme: data });
        setInputValue('');
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setImportingTheme(false);
      });
  }

  return (
    <Box className="ThemePicker">
      <Text color="text-xweak" size="small" margin={{ top: '-1rem' }}>
        theme
      </Text>
      <Select
        options={[...themeOptions, 'import…']}
        value={currentTheme}
        onChange={onChange}
      />
      {showImport && (
        <Layer position="center">
          <Box pad="medium" gap="small" width="medium">
            <Heading level={3} margin="none">
              Import
            </Heading>
            <Text>What is the url of the theme?</Text>
            <MaskedInput
              mask={[{ fixed: 'https://' }, { regexp: /^.*$/ }]}
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
            />
            <Box
              as="footer"
              gap="small"
              direction="row"
              align="center"
              justify="end"
              pad={{ top: 'medium', bottom: 'small' }}
            >
              <Button
                label="Cancel"
                onClick={() => {
                  onChange({ value: 'default' });
                }}
                color="dark-3"
              />
              <Button
                label={
                  <Text color="white">
                    <strong>Import</strong>
                  </Text>
                }
                onClick={() => importTheme(inputValue)}
                primary
              />
            </Box>
          </Box>
        </Layer>
      )}
    </Box>
  );
}
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
