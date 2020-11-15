import React from 'react';
import { Anchor, Box, Card, Paragraph } from 'grommet';
import ContactPlatforms from 'internal/components/ContactPlatforms';
import PageHeader from 'internal/components/PageHeader';

export default function About({ children, ...props }) {
  return (
    <Box className="About" fill="horizontal" {...props}>
      <PageHeader title="About" />

      <Card pad="large" gap="medium" background="white">
        <Box height="medium" align="center">
          <Paragraph
            margin={{ horizontal: 'auto' }}
            size="xlarge"
            textAlign="center"
          >
            Starter Apps is a resource for showing how applications can be built
            using React and{' '}
            <Anchor href="https://v2.grommet.io" target="_blank">
              Grommet
            </Anchor>
            .
          </Paragraph>
        </Box>
        <Box pad={{ bottom: 'xlarge' }}>
          <ContactPlatforms />
        </Box>
      </Card>
    </Box>
  );
}
