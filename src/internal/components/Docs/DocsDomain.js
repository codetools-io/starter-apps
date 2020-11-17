import React from 'react';
import { Box, Grid, List, Markdown, Text } from 'grommet';

import DocsCard from './DocsCard';

export default function DocsDomain({ doc }) {
  return (
    <Box className="DocsDomain" gap="small" flex={false}>
      <DocsCard>
        <List data={doc?.domain} pad="none">
          {(datum, index) => {
            const isAlternate = index % 2;
            const { name, description } = datum;

            return (
              <Box
                background={
                  isAlternate
                    ? 'DocsDomainAlternateBackgroundColor'
                    : 'DocsDomainBackgroundColor'
                }
              >
                <Grid
                  columns={['small', 'flex']}
                  rows={['auto']}
                  areas={[['name', 'description']]}
                  pad="medium"
                  gap={{ row: 'medium', column: 'small' }}
                  align="center"
                >
                  <Box gridArea="name" direction="row" gap="small">
                    <Text weight="bold">{name}</Text>
                  </Box>

                  <Box
                    gridArea="description"
                    direction="row"
                    margin="none"
                    fill
                  >
                    <Markdown>{description}</Markdown>
                  </Box>
                </Grid>
              </Box>
            );
          }}
        </List>
      </DocsCard>
    </Box>
  );
}
