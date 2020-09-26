import React, { useEffect, useMemo, useState } from 'react';
import {
  Box,
  Button,
  Card,
  Grid,
  Heading,
  List,
  Markdown,
  Paragraph,
  Tab,
  Tabs,
  Text,
  ThemeContext,
} from 'grommet';
import MonacoEditor from '@monaco-editor/react';

import theme from './theme';

const DOCS_BASE_PATH = `${process.env.PUBLIC_URL}/docs`;

const options = {
  fontSize: 16,
  minimap: {
    enabled: false,
  },
  readOnly: true,
};

export default function Docs({ children, ...props }) {
  return (
    <Box className="Docs" {...props}>
      {children}
    </Box>
  );
}

export function DocsCode({ files = [], options }) {
  const [activeFileIndex, setActiveFileIndex] = useState(null);

  useEffect(() => {
    if (activeFileIndex === null && files?.length) {
      setActiveFileIndex(
        files?.findIndex((file) => file?.filename === `${file?.app}.js`)
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFileIndex, files]);

  return (
    <DocsCard height="large" pad="medium" flex={false}>
      <Box border fill>
        <Grid columns={['auto', 'flex']} rows={['full']} fill>
          <Box overflow={{ vertical: 'auto' }}>
            {files.map((file, index) => {
              return (
                <Box
                  key={`file-${file?.app}-${file?.filepath}`}
                  background={index === activeFileIndex ? 'white' : 'shade-1'}
                  border={[
                    'bottom',
                    {
                      side: 'right',
                      color:
                        index === activeFileIndex ? 'transparent' : 'border',
                    },
                  ]}
                  direction="row"
                  justify="center"
                  pad="small"
                  flex={false}
                >
                  <Button
                    label={file?.filepath}
                    onClick={() => setActiveFileIndex(index)}
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
              value={files[activeFileIndex]?.content}
              options={options}
            />
          </Box>
        </Grid>
      </Box>
    </DocsCard>
  );
}

export function DocsTheme({ children, ...props }) {
  return (
    <ThemeContext.Extend value={theme} {...props}>
      {children}
    </ThemeContext.Extend>
  );
}

export function DocsCard({ children, ...props }) {
  return (
    <Card className="DocsCard" background="white" {...props}>
      <DocsTheme>{children}</DocsTheme>
    </Card>
  );
}
export function DocsOverview({ name, description }) {
  return (
    <Box gap="small" flex={false}>
      <Heading level={3} margin="none">
        {name}
      </Heading>
      <Paragraph margin="none" fill>
        {description}
      </Paragraph>
    </Box>
  );
}

export function DocsPreview({ children }) {
  return (
    <DocsCard height="large" flex={false}>
      <Box overflow="auto" fill>
        {children}
      </Box>
    </DocsCard>
  );
}

export function DocsMain({ children, files = [] }) {
  const [active, setActive] = useState(0);
  const showPreview = useMemo(() => active === 0, [active]);
  const showCode = useMemo(() => active === 1, [active]);
  return (
    <Box gap="small" flex={false}>
      <Box direction="row" justify="end">
        <Tabs activeIndex={active} onActive={(next) => setActive(next)}>
          <Tab title="Preview"></Tab>
          <Tab title="Code"></Tab>
        </Tabs>
      </Box>
      {showPreview && <DocsPreview children={children} />}
      {showCode && <DocsCode files={files} options={options} />}
    </Box>
  );
}

export function DocsProps({ properties }) {
  return (
    <Box gap="small" flex={false}>
      <Heading level={4} margin="none">
        Properties
      </Heading>
      <DocsCard>
        <List data={properties} pad="none">
          {(datum, index) => {
            const isAlternate = index % 2;
            const { name, description, format } = datum;
            const { overview, args, returnValue } = description;
            const formatAppend = args
              ? `(${args?.map((a) => a?.name)?.join(', ')})`
              : ``;
            const areas = [
              ['name', 'format', 'description'],
              args ? ['properties', 'properties', 'properties'] : null,
              returnValue
                ? ['returnValue', 'returnValue', 'returnValue']
                : null,
            ]?.filter((area) => area);
            return (
              <Box background={isAlternate ? 'light-1' : 'white'}>
                <Grid
                  columns={['auto', 'flex', '1/2']}
                  rows={['auto']}
                  areas={areas}
                  pad="medium"
                  gap={{ row: 'medium', column: 'small' }}
                  align="center"
                >
                  <Box gridArea="name" direction="row" gap="small">
                    <Text weight="bold">{name}</Text>
                  </Box>
                  <Box gridArea="format">
                    <Markdown>{`\`${format}${formatAppend}\``}</Markdown>
                  </Box>
                  <Paragraph
                    gridArea="description"
                    margin="none"
                    textAlign="end"
                    fill
                  >
                    {overview || description}
                  </Paragraph>
                  {args && (
                    <Box
                      gridArea="properties"
                      pad={{
                        vertical: 'small',
                        horizontal: 'medium',
                      }}
                      border
                    >
                      <Box gap="medium" border="between">
                        {args?.map((arg, index) => {
                          const {
                            name: argName,
                            type: argType,
                            description: argDescription,
                          } = arg;

                          return (
                            <Box
                              key={`${name}-arg-${argName}`}
                              direction="row"
                              align="baseline"
                              justify="between"
                              gap="small"
                            >
                              <Markdown>{`\`${argName} <${argType}>\``}</Markdown>
                              <Text color="dark-4">{argDescription}</Text>
                            </Box>
                          );
                        })}
                      </Box>
                    </Box>
                  )}
                  {returnValue && (
                    <Box
                      gridArea="returnValue"
                      direction="row"
                      align="baseline"
                      justify="start"
                      gap="small"
                    >
                      <Text color="dark-4">returns</Text>
                      <Markdown>{`\`${returnValue}\``}</Markdown>
                    </Box>
                  )}
                </Grid>
              </Box>
            );
          }}
        </List>
      </DocsCard>
    </Box>
  );
}

export function DocsPage({ component: Component, ...props }) {
  const { name, description, properties } = Component.toJSON();
  const [data, setData] = useState();

  useEffect(() => {
    if (name) {
      fetch(`${DOCS_BASE_PATH}/${name}.json`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        })
        .catch((err) => console.error(err));
    }
  }, [name]);

  return (
    <Box className="DocsPage" gap="large" fill="horizontal" {...props}>
      <DocsOverview name={name} description={description} />
      <DocsMain files={data?.files || []}>
        <Component />
      </DocsMain>
      <DocsProps properties={properties} />
      <Box fill></Box>
    </Box>
  );
}
