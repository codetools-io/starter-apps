import React from 'react';
import { Grommet } from 'grommet';
import * as config from 'internal/config';

import AppShellContainer from './AppShellContainer';
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
      <AppShellContainer
        nav={nav}
        currentUser={currentUser}
        login={login}
        logout={logout}
        {...props}
      >
        {children}
      </AppShellContainer>
    </Grommet>
  );
}
