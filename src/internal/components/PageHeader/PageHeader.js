import React, { useEffect } from 'react';
import { Grid, Heading, Paragraph } from 'grommet';
import Socials from 'internal/components/Socials';

export default function PageHeader({ title, description, socials, ...props }) {
  useEffect(() => {
    document.title =
      title === 'Starter Apps' ? title : `${title} | Starter Apps`;
  });
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
      {description && (
        <Paragraph gridArea="intro" margin="none" fill>
          {description}
        </Paragraph>
      )}
      {socials && (
        <Socials gridArea="socials" margin={{ top: 'small' }} {...socials} />
      )}
    </Grid>
  );
}
