import React from 'react';
import { Box, Grid, Heading, List, Markdown, Paragraph, Text } from 'grommet';

import DocsCard from './DocsCard';

function DocsPropsHooks({ doc }) {
  return (
    <Box gap="small">
      <Heading level={4} margin={{ bottom: 'none' }}>
        Hooks
      </Heading>
      <DocsCard>
        <List data={doc?.props?.hooks} pad="none">
          {(datum, index) => {
            const isAlternate = index % 2;
            const { name, description, type, args, returnValue } = datum;

            const typeAppend = args
              ? `(${args?.map((a) => a?.name)?.join(', ')})`
              : ``;
            const areas = [
              ['name', 'type', 'description'],
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
                  <Box gridArea="type">
                    <Markdown>{`\`${type}${typeAppend}\``}</Markdown>
                  </Box>
                  <Paragraph
                    gridArea="description"
                    margin="none"
                    textAlign="end"
                    fill
                  >
                    {description}
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
export default function DocsProps({ doc }) {
  return (
    <Box
      className="DocsProps"
      gap="small"
      flex={false}
      width={{ max: 'xxlarge' }}
    >
      {doc?.props?.hooks && <DocsPropsHooks doc={doc} />}
    </Box>
  );
}
