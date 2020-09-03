import React from 'react';
import { Box, Text } from 'grommet';

export default function Tag({ color, label, ...props }) {
  return (
    <Box
      className="Tag"
      background={color}
      pad={{
        horizontal: 'small',
        vertical: 'xsmall',
      }}
      {...props}
    >
      <Text size="small">{label}</Text>
    </Box>
  );
}
