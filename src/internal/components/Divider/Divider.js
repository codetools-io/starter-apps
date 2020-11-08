import React from 'react';
import { Box, Text } from 'grommet';

export default function Divider({ text, ...props }) {
  return (
    <Box
      pad="medium"
      direction="row"
      justify="center"
      align="center"
      gap="medium"
      width="33%"
      flex={false}
    >
      <Box border="bottom" width="xsmall" />
      <Text size="xxlarge" weight="bold">
        {text}
      </Text>
      <Box border="bottom" width="xsmall" />
    </Box>
  );
}
