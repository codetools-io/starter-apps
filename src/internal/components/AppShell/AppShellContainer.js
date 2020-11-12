import React, { useContext, useMemo } from 'react';
import { Grid, ResponsiveContext } from 'grommet';

import AppShellHeader from './AppShellHeader';
import AppShellMain from './AppShellMain';
import AppShellSidebar from './AppShellSidebar';
import './AppShell.css';
export default function AppShellContainer({
  children,
  nav,
  currentUser,
  login = () => {},
  logout = () => {},
  ...props
}) {
  const size = useContext(ResponsiveContext);
  const areas = useMemo(() => {
    if (size === 'small') {
      return [['header'], ['sidebar'], ['main']];
    }
    return [
      ['sidebar', 'header'],
      ['sidebar', 'main'],
    ];
  }, [size]);
  const columns = useMemo(() => {
    if (size === 'small') {
      return ['full'];
    }
    return ['medium', 'flex'];
  }, [size]);
  const rows = useMemo(() => {
    if (size === 'small') {
      return ['auto'];
    }
    return ['auto', 'flex'];
  }, [size]);

  return (
    <Grid
      className="AppShellContainer"
      rows={rows}
      columns={columns}
      areas={areas}
      style={{ minHeight: '100vh' }}
    >
      <AppShellHeader currentUser={currentUser} login={login} logout={logout} />
      <AppShellSidebar nav={nav} />
      <AppShellMain>{children}</AppShellMain>
    </Grid>
  );
}
