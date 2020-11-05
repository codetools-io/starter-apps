import React from 'react';
import { Grid, Grommet } from 'grommet';
import * as config from 'internal/config';
import AppShellHeader from './AppShellHeader';
import AppShellMain from './AppShellMain';
import AppShellSidebar from './AppShellSidebar';
import './AppShell.css';

export default function AppShell({
  children,
  nav,
  currentUser,
  login = () => {},
  logout = () => {},
  ...props
}) {
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
        <AppShellSidebar nav={nav} />
        <AppShellHeader
          currentUser={currentUser}
          login={login}
          logout={logout}
        />
        <AppShellMain>{children}</AppShellMain>
      </Grid>
    </Grommet>
  );
}
