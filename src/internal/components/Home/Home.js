import React, { useContext } from 'react';
import {
  Box,
  Card,
  Grid,
  Heading,
  Paragraph,
  ResponsiveContext,
} from 'grommet';
import { sortBy } from 'lodash';
import { Link } from 'react-router-dom';
import Socials from 'internal/components/Socials';

function HomeSection({ components, description, title }) {
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
              key={component?.data.path}
              to={component?.data.path}
              style={{ textDecoration: 'none' }}
            >
              <Card background="white" pad="medium" gap="small" fill>
                <Heading level={4} margin="none">
                  {component?.data?.name}
                </Heading>
                <Paragraph margin="none">
                  {component?.data?.description}
                </Paragraph>
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
export default function Home({ docs = {}, ...props }) {
  return (
    <Box className="Home" gap="large" flex={false} fill="horizontal" {...props}>
      <HomeHeader />
      <Box gap="large">
        {docs?.categories?.map((category) => {
          return (
            <HomeSection
              key={category.data.path}
              title={category.data.name}
              description={category.data.description}
              components={sortBy(docs?.components, 'data.name').filter(
                (component) => component.data.categoryId === category.data.id
              )}
            />
          );
        })}
      </Box>
    </Box>
  );
}
