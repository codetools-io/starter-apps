import React, { useContext } from 'react';
import { Box, Grid, ResponsiveContext } from 'grommet';

export default function GridLayout({
  children,
  columnCount = 'fit',
  columnSize = 'medium',
  gridProps = {},
  ...props
}) {
  const size = useContext(ResponsiveContext);

  return (
    <Box {...props}>
      <Grid
        columns={{ count: columnCount, size: columnSize }}
        rows="auto"
        gap={size}
        fill
        {...gridProps}
      >
        {children}
      </Grid>
    </Box>
  );
}
