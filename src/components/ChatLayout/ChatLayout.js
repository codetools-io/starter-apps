import React from 'react';
import { Box, Grid } from 'grommet';

export default function ChatLayout({ children }) {
  return (
    <Box className="ChatLayout" background="white" border fill>
      <Grid
        rows={['xsmall', 'flex', 'auto']}
        columns={['1/4', '1/4', '1/4', '1/4']}
        areas={[
          ['search', 'header', 'header', 'header'],
          ['sidebar', 'main', 'main', 'main'],
          ['compose', 'footer', 'footer', 'footer'],
        ]}
        fill
      >
        {children}
      </Grid>
    </Box>
  );
}
