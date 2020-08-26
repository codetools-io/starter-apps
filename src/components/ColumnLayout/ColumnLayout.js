import React from 'react';
import { Grid } from 'grommet';

export default function ColumnLayout({ children, ...props }) {
  return (
    <Grid
      className="ColumnLayout"
      columns="100%"
      rows={['auto', 'flex', 'auto']}
      areas={[['header'], ['main'], ['footer']]}
      fill
      {...props}
    >
      {children}
    </Grid>
  );
}
