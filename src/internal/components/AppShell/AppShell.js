import React from 'react';
import { Grid, Grommet } from 'grommet';
import * as config from 'internal/config';
import AppShellMain from './AppShellMain';
import AppShellSidebar from './AppShellSidebar';
import AppShellHeader from './AppShellHeader';
import './AppShell.css';

export default function AppShell({ children, nav, ...props }) {
  return (
    <Grommet className="AppShell" theme={config?.theme} full>
      <Grid
        className="AppShellContainer"
        rows={['auto', 'flex']}
        columns={['medium', 'flex']}
        areas={[
          ['sidebar', 'header'],
          ['sidebar', 'main'],
        ]}
        style={{ minHeight: '100vh' }}
      >
        <AppShellHeader />
        <AppShellSidebar nav={nav} />
        <AppShellMain>{children}</AppShellMain>
      </Grid>
    </Grommet>
  );
}
