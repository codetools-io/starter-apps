import React from 'react';

import { Box, Image, Stack } from 'grommet';
export default function Masthead({
  imageSrc,
  contentLocation = 'center',
  children,
}) {
  return (
    <Box className="Masthead">
      <Stack anchor={contentLocation} fill>
        <Image src={imageSrc} fit="cover" fill />
        {children}
      </Stack>
    </Box>
  );
}
