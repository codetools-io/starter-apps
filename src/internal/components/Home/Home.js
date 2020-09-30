import React, { useEffect, useState } from 'react';
import { Box, Card, CardBody, Grid, Heading, Paragraph } from 'grommet';

const DOCS_BASE_PATH = `${process.env.PUBLIC_URL}/docs`;
export default function Home({ children, ...props }) {
  const [data, setData] = useState();
  const apps = [
    {
      id: 'calendar1',
      name: 'Calendar',
      description: 'An app for managing dates, events, and reminders.',
    },
    {
      id: 'cart2',
      name: 'Cart',
      description:
        'The components to show inside of the main area of the Cart.',
    },
    {
      id: 'calendar3',
      name: 'Calendar',
      description: 'An app for managing dates, events, and reminders.',
    },
    {
      id: 'cart4',
      name: 'Cart',
      description:
        'The components to show inside of the main area of the Cart.',
    },
    {
      id: 'calendar5',
      name: 'Calendar',
      description: 'An app for managing dates, events, and reminders.',
    },
    {
      id: 'cart6',
      name: 'Cart',
      description:
        'The components to show inside of the main area of the Cart.',
    },
  ];
  useEffect(() => {
    fetch(`${DOCS_BASE_PATH}/overview.json`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.error(err));
  }, []);
  console.log(data);
  return (
    <Box className="Home" gap="large" {...props} flex={false}>
      <Box gap="small" flex={false}>
        <Heading level={1} margin="none">
          Starter Apps
        </Heading>
        <Paragraph margin="none" fill>
          Grommet based UI solutions for various application types.
        </Paragraph>
      </Box>
      {/* Sections */}
      <Box gap="xlarge" border="between">
        {/* Apps Section */}
        <Box gap="medium" pad={{ vertical: 'medium' }}>
          <Heading level={2} margin="none">
            Apps
          </Heading>
          <Paragraph margin="none" fill>
            A component that implements a completed product. The component could
            be a stand-alone product, or used inside of a larger product. Many
            times they are wrapped inside of a global wrapper (see Shells
            below), and are paired with other apps.
          </Paragraph>
          <Grid
            columns={['flex', 'flex', 'flex']}
            rows={['auto']}
            gap="medium"
            wrap
          >
            {apps.map((app) => {
              return (
                <Card key={app?.id} background="white" pad="medium">
                  <Heading level={4} margin="none">
                    {app?.name}
                  </Heading>
                  <Paragraph margin="none">{app?.description}</Paragraph>
                </Card>
              );
            })}
          </Grid>
        </Box>

        {/* Shells Section */}
        <Box gap="medium" pad={{ vertical: 'medium' }}>
          <Heading level={2} margin="none">
            Shells
          </Heading>
          <Paragraph margin="none" fill>
            A component that is meant for use as a global wrapper around the
            main product(s) and functionality. These are usually composed of a
            few smaller sections like a header, sidebar, footer, main,
            navigation, etc.
          </Paragraph>
          <Grid
            columns={['flex', 'flex', 'flex']}
            rows={['auto']}
            gap="medium"
            wrap
          >
            {apps.map((app) => {
              return (
                <Card key={app?.id} background="white" pad="medium">
                  <Heading level={4} margin="none">
                    {app?.name}
                  </Heading>
                  <Paragraph margin="none">{app?.description}</Paragraph>
                </Card>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
