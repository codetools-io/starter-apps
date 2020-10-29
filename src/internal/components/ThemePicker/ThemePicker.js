import React, { useMemo, useState } from 'react';
import {
  Box,
  Button,
  Heading,
  Select,
  Text,
  Layer,
  MaskedInput,
} from 'grommet';

const THEME_DESIGNER_ORIGIN = process?.env?.REACT_APP_THEME_DESIGNER_ORIGIN;
const THEME_DESIGNER_STORAGE = process?.env?.REACT_APP_THEME_DESIGNER_STORAGE;

export default function ThemePicker({
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

    let themeEndpoint = url;

    if (themeEndpoint.startsWith(THEME_DESIGNER_ORIGIN)) {
      const themeUrl = new URL(themeEndpoint);
      const themeParams = new URLSearchParams(themeUrl.search);
      if (themeParams?.has?.('id')) {
        themeEndpoint = `${THEME_DESIGNER_STORAGE}/${themeParams?.get?.('id')}`;
      }
    }

    fetch(`${themeEndpoint}`)
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
