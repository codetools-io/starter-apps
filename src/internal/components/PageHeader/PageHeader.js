import React from 'react';
import { Grid, Heading, Paragraph } from 'grommet';
import Socials from 'internal/components/Socials';

export default function PageHeader({
  title,
  description,
  socials = {
    github: true,
    twitter: true,
  },
  ...props
}) {
  return (
    <Grid
      className="PageHeader"
      columns={['1/4', '1/4', '1/4', '1/4']}
      rows={['auto']}
      areas={[
        ['heading', 'heading', 'heading', 'heading'],
        ['intro', 'intro', 'intro', 'intro'],
        ['socials', 'socials', 'socials', 'socials'],
      ]}
      align="center"
      alignContent="center"
      gap="small"
      {...props}
    >
      <Heading gridArea="heading" level={1} margin="none">
        {title}
      </Heading>
      <Paragraph gridArea="intro" margin="none" fill>
        {description}
      </Paragraph>
      <Socials gridArea="socials" margin={{ top: 'small' }} {...socials} />
    </Grid>
  );
}
