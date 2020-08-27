import React from 'react';
import { Box, Heading, Paragraph, WorldMap } from 'grommet';
function Map({ continents = [], places = [] }) {
  return (
    <WorldMap color="light-6" continents={continents} places={places} fill />
  );
}
export default function MapWidget({ title, description, data, ...props }) {
  return (
    <Box background="white" pad="medium" gap="medium" border {...props}>
      {title && (
        <Heading level="4" margin="none">
          {title}
        </Heading>
      )}
      <Map {...data} />
      {description && (
        <Paragraph margin="none" color="dark-6">
          {description}
        </Paragraph>
      )}
    </Box>
  );
}
