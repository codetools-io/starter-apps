import React from 'react';
import { Grid, Grommet } from 'grommet';
import * as config from 'config';
import AppShellMain from './AppShellMain';
import AppShellSidebar from './AppShellSidebar';

import './AppShell.css';

export default function AppShell({ children, ...props }) {
  return (
    <Grommet className="AppShell" theme={config?.theme} full>
      <Grid
        className="AppShellContainer"
        rows={['auto']}
        columns={['1/4', '3/4']}
        areas={[['sidebar', 'main', 'main', 'main']]}
        style={{
          height: '100vh',
        }}
      >
        <AppShellSidebar />
        <AppShellMain>{children}</AppShellMain>
      </Grid>
    </Grommet>
  );
}
