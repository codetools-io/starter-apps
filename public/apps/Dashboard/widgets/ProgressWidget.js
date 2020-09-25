import React from 'react';
import { Box, Card, Heading, Meter, Paragraph } from 'grommet';

function Progress({ value, color, label }) {
  return (
    <Box gap="xsmall">
      {label && (
        <Paragraph margin="none" color="dark-6">
          {label}
        </Paragraph>
      )}

      <Meter
        aria-label="meter"
        type="bar"
        values={[{ value, color, label }]}
        width="100%"
      />
    </Box>
  );
}

export default function ProgressWidget({ title, icon, data, ...props }) {
  const Icon = icon ? icon : null;
  return (
    <Card
      background="white"
      pad="medium"
      gap="medium"
      direction="row"
      elevation="none"
      border
      {...props}
    >
      <Box gap="medium" flex>
        {title && (
          <Heading level="4" margin="none">
            {title}
          </Heading>
        )}
        <Progress {...data} />
      </Box>
      {Icon && (
        <Box>
          <Icon />
        </Box>
      )}
    </Card>
  );
}
