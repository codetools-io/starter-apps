import React from 'react';
import { Box, Grid } from 'grommet';

export default function ThreadLayout({ children, ...props }) {
  return (
    <Box className="ThreadLayout" fill {...props}>
      <Grid
        columns={['250px', '400px', 'flex']}
        areas={[['menu', 'threads', 'thread']]}
        fill
      >
        {children}
      </Grid>
    </Box>
  );
}
