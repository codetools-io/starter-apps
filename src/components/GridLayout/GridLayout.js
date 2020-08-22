import React, { useContext } from 'react';
import { Box, Grid, ResponsiveContext } from 'grommet';

export default function GridLayout({ children, gridProps = {}, ...props }) {
  const size = useContext(ResponsiveContext);

  return (
    <Box align="start" alignContent="start" justify="start" {...props}>
      <Grid
        columns={size !== 'small' ? 'small' : '100%'}
        rows="auto"
        align="start"
        alignContent="start"
        justify="start"
        justifyContent="start"
        gap={size}
        {...gridProps}
      >
        {children}
      </Grid>
    </Box>
  );
}
