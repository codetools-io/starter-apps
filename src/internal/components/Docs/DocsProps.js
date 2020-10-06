import React from 'react';
import { Box, Grid, Heading, List, Markdown, Paragraph, Text } from 'grommet';

import DocsCard from './DocsCard';

export default function DocsProps({ properties }) {
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
