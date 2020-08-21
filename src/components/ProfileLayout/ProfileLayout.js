import React from 'react';
import { Box } from 'grommet';

export default function ProfileLayout({ children }) {
  return (
    <Box className="ProfileLayout" fill>
      {children}
    </Box>
  );
}
