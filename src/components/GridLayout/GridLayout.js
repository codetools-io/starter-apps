import React, { useContext } from 'react';
import { Box, Grid, ResponsiveContext } from 'grommet';

export default function GridLayout({ children }) {
  const size = useContext(ResponsiveContext);
  console.log(size);
  return (
    <Box>
      <Grid columns={size !== 'small' ? 'small' : '100%'} gap="small">
        {children}
      </Grid>
    </Box>
  );
}
