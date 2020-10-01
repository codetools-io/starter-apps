import React, { useContext } from 'react';
import {
  Box,
  Card,
  Grid,
  Heading,
  Paragraph,
  ResponsiveContext,
} from 'grommet';
import { Link } from 'react-router-dom';
import * as config from 'internal/config';

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
        gap="medium"
      >
        {components?.map((component) => {
          return (
            <Link
              key={component?.id}
              to={component?.link?.path}
              style={{ textDecoration: 'none' }}
            >
              <Card background="white" pad="medium" gap="small" fill>
                <Heading level={4} margin="none">
                  {component?.displayName}
                </Heading>
                <Paragraph margin="none">{component?.description}</Paragraph>
              </Card>
            </Link>
          );
        })}
      </Grid>
    </Box>
  );
}
export default function Home({ children, ...props }) {
  return (
    <Box className="Home" gap="large" {...props} flex={false} fill="horizontal">
      <Box gap="small" flex={false}>
        <Heading level={1} margin="none">
          Starter Apps
        </Heading>
        <Paragraph margin="none" fill>
          Grommet based UI solutions for various application types.
        </Paragraph>
      </Box>
      <Box gap="large">
        <ComponentSection
          title="Features"
          description="Components that implement a complete product feature in the application."
          components={config?.appOverviews}
        />

        <ComponentSection
          title="Shells"
          description="Components that wrap an application globally."
          components={config?.shellOverviews}
        />
      </Box>
    </Box>
  );
}
