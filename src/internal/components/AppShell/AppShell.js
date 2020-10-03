import React from 'react';
import { Grid, Grommet } from 'grommet';
import * as config from 'internal/config';
import AppShellMain from './AppShellMain';
import AppShellSidebar from './AppShellSidebar';
import './AppShell.css';

export default function AppShell({ children, nav, ...props }) {
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
        <AppShellSidebar nav={nav} />
        <AppShellMain>{children}</AppShellMain>
      </Grid>
    </Grommet>
  );
}
