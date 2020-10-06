import React from 'react';
import { Box } from 'grommet';

export default function Docs({ children, ...props }) {
  return (
    <Box className="Docs" {...props}>
      {children}
    </Box>
  );
}
