import React from 'react';
import { Box, Card, Paragraph } from 'grommet';
import ContactPlatforms from 'internal/components/ContactPlatforms';
import PageHeader from 'internal/components/PageHeader';

export default function About({ children, ...props }) {
  return (
    <Box className="About" fill="horizontal" {...props}>
      <PageHeader title="About" />

      <Card pad="large" gap="medium" background="white">
        <Box height="medium" align="center" direction="center">
          <Paragraph
            margin={{ horizontal: 'auto' }}
            size="xlarge"
            textAlign="center"
          >
            StarterApps is a resource for solutions to building Grommet based
            applications. We provide developers with examples of how real-world
            applications can be built with Grommet.
          </Paragraph>
        </Box>
        <Box pad={{ bottom: 'xlarge' }}>
          <ContactPlatforms />
        </Box>
      </Card>
    </Box>
  );
}
