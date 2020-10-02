import React, { useContext } from 'react';
import { groupBy } from 'lodash';
import {
  Box,
  Card,
  Grid,
  Heading,
  Paragraph,
  ResponsiveContext,
} from 'grommet';
import { Link } from 'react-router-dom';
import Socials from 'internal/components/Socials';

function ComponentSection({ components, description, title }) {
  const size = useContext(ResponsiveContext);

  return (
    <Box gap="medium" pad={{ vertical: 'medium' }}>
      <Heading level={2} margin="none">
        {title}
      </Heading>
      <Paragraph margin="none" fill>
        {description}
      </Paragraph>
      <Grid
        columns={size !== 'small' ? 'medium' : '100%'}
        rows={['small']}
        gap="large"
      >
        {components?.map((component) => {
          return (
            <Link
              key={`${component?.data?.category}-${component?.data?.slug}`}
              to={`/${component?.data?.category}/${component?.data?.slug}`}
              style={{ textDecoration: 'none' }}
            >
              <Card background="white" pad="medium" gap="small" fill>
                <Heading level={4} margin="none">
                  {component?.data?.displayName}
                </Heading>
                <Paragraph margin="none">{component?.data?.short}</Paragraph>
              </Card>
            </Link>
          );
        })}
      </Grid>
    </Box>
  );
}

function HomeHeader() {
  return (
    <Box direction="row" justify="between">
      <Box gap="small" flex={false}>
        <Heading level={1} margin="none">
          Starter Apps
        </Heading>
        <Paragraph margin="none" fill>
          Grommet based UI solutions for various application types.
        </Paragraph>
        <Socials margin={{ top: 'small' }} />
      </Box>
    </Box>
  );
}
export default function Home({ site, ...props }) {
  const docs = groupBy(site?.docs, 'data.category');

  return (
    <Box className="Home" gap="large" flex={false} fill="horizontal" {...props}>
      <HomeHeader />
      <Box gap="large">
        <ComponentSection
          title="Features"
          description="Components that implement a complete product feature in the application."
          components={docs?.apps}
        />

        <ComponentSection
          title="Shells"
          description="Components that wrap an application globally."
          components={docs?.shells}
        />
      </Box>
    </Box>
  );
}
