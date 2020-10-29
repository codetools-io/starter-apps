import React, { useEffect, useMemo, useState } from 'react';
import { Box, Button, Grid, Select, Text } from 'grommet';
import MonacoEditor from '@monaco-editor/react';
import { orderBy } from 'lodash';
import useRouter from 'internal/hooks/useRouter';
import DocsCard from './DocsCard';

const options = {
  fontSize: 16,
  minimap: {
    enabled: false,
  },
  readOnly: true,
};
export default function DocsTheme({ themes = {}, loadActions }) {
  const { queryParams, setQueryParam } = useRouter();
  const [currentTheme, setCurrentTheme] = useState(
    queryParams?.theme || 'default'
  );
  const [activeFilename, setActiveFilename] = useState(
    queryParams?.theme_file || 'theme.js'
  );
  const themeNames = useMemo(() => Object.keys(themes), [themes]);
  const themeFiles = useMemo(() => {
    if (!themes?.[currentTheme]) {
      return [];
    }
    return orderBy(themes?.[currentTheme], ['filename']);
  }, [currentTheme, themes]);
  const activeFile = useMemo(() => {
    return themeFiles?.find(
      (themeFile) => themeFile?.filename === activeFilename
    );
  }, [themeFiles, activeFilename]);

  useEffect(() => {
    loadActions([
      <Box key="action-theme" className="DocsThemeAction">
        <Text color="text-xweak" size="small" margin={{ top: '-1rem' }}>
          theme
        </Text>
        <Select
          options={themeNames}
          value={currentTheme}
          onChange={({ value }) => {
            setCurrentTheme(value);
            setQueryParam('theme', value);
          }}
        />
      </Box>,
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadActions, currentTheme, themeNames]);

  return (
    <Box className="DocsTheme">
      <DocsCard height="large" pad="medium" flex={false}>
        <Box border={true} fill>
          <Grid columns={['auto', 'flex']} rows={['full']} fill>
            <Box overflow={{ vertical: 'auto' }}>
              {themeFiles?.map((themeFile) => {
                const isActive = themeFile?.filename === activeFilename;
                return (
                  <Box
                    key={`theme-${themeFile?.filename}`}
                    background={isActive ? 'white' : 'shade-1'}
                    border={[
                      'bottom',
                      {
                        side: 'right',
                        color: isActive ? 'transparent' : 'border',
                      },
                    ]}
                    direction="row"
                    justify="center"
                    pad="small"
                    flex={false}
                  >
                    <Button
                      label={
                        <Text weight={isActive ? 'bold' : 'normal'}>
                          {themeFile?.filename}
                        </Text>
                      }
                      onClick={() => {
                        setActiveFilename(themeFile?.filename);
                        setQueryParam('theme_file', themeFile?.filename);
                      }}
                      size="large"
                      fill
                      plain
                    />
                  </Box>
                );
              })}
              <Box border="right" flex />
            </Box>
            <Box>
              <MonacoEditor
                language="javascript"
                theme="light"
                height="100%"
                value={activeFile?.content}
                options={options}
              />
            </Box>
          </Grid>
        </Box>
      </DocsCard>
    </Box>
  );
}
