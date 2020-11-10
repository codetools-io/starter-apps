import React from 'react';
import { Box, Card } from 'grommet';
// import ContactForm from 'internal/components/ContactForm';
import ContactPlatforms from 'internal/components/ContactPlatforms';
// import Divider from 'internal/components/Divider';
import PageHeader from 'internal/components/PageHeader';

export default function Contact({ children, ...props }) {
  return (
    <Box className="Contact" fill {...props}>
      <PageHeader title="Contact" />
      <Card
        pad="none"
        background="white"
        direction="column"
        align="center"
        fill
      >
        <ContactPlatforms pad={{ vertical: 'xlarge' }} />
        {/* <Divider text="or" /> */}
        {/* <ContactForm pad={{ vertical: 'large' }} flex={false} width="large" /> */}
      </Card>
    </Box>
  );
}
