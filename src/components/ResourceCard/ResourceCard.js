import React from 'react';

import { Box, Card, CardBody, Heading, Image, Paragraph } from 'grommet';

export default function ResourceCard({
  children,
  title = '',
  description = '',
  image = '',
  imageTitle = '',
  ...props
}) {
  return (
    <Box pad="medium" align="start" {...props}>
      <Card elevation="none" width="medium">
        <CardBody height="small">
          <Image fit="cover" src={image} a11yTitle={imageTitle} />
        </CardBody>
        <Box pad={{ horizontal: 'medium' }} responsive={false}>
          <Heading level="3" margin={{ vertical: 'medium' }}>
            {title}
          </Heading>
          <Paragraph margin={{ top: 'none' }}>{description}</Paragraph>
        </Box>
      </Card>
    </Box>
  );
}
