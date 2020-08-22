import React from 'react';
import { Box, Grid } from 'grommet';

export default function AppLayout({ children, ...props }) {
  return (
    <Box
      className="AppLayout"
      background="white"
      border="light-1"
      fill
      {...props}
    >
      <Grid
        rows={['xsmall', 'flex', 'auto']}
        columns={['1/4', '1/4', '1/4', '1/4']}
        areas={[
          ['sidebar-header', 'header', 'header', 'header'],
          ['sidebar', 'main', 'main', 'main'],
          ['sidebar-footer', 'footer', 'footer', 'footer'],
        ]}
        fill
      >
        {children}
      </Grid>
    </Box>
  );
}
