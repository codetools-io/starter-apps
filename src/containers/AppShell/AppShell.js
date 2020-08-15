import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Footer, Grid, Grommet, Header, Main, Sidebar } from 'grommet';
import Notification from 'components/Notification';
import * as config from 'config';

export default function AppShellContainer({ children, ...props }) {
  const isAuthenticated = true;
  const login = () => {};
  const logout = () => {};
  const authHandler = isAuthenticated ? logout : login;
  const authLabel = isAuthenticated ? 'logout' : 'login';

  return (
    <Grommet theme={config?.theme}>
      <Grid
        rows={['auto', 'auto', 'auto']}
        columns={['1/4', '1/4', '1/4', '1/4']}
        areas={[
          ['header', 'header', 'header', 'header'],
          ['sidebar', 'main', 'main', 'main'],
          ['sidebar', 'footer', 'footer', 'footer'],
        ]}
      >
        {/* <AppShellNotifications /> */}
        <AppShellHeader
          siteName={config?.site?.name}
          authHandler={authHandler}
          authLabel={authLabel}
        />
        <AppShellSidebar />
        <AppShellMain>{children}</AppShellMain>
        <AppShellFooter
          copyrightYear={config?.site?.copyrightYear}
          siteName={config?.site?.name}
        />
      </Grid>
    </Grommet>
  );
}

function AppShellNotifications() {
  const notifications = [];

  return (
    <div>
      {notifications.map((notification) => {
        return <Notification key={notification.id} {...notification} />;
      })}
    </div>
  );
}

function AppShellHeader({ siteName, authHandler = () => {}, authLabel }) {
  return (
    <Header gridArea="header">
      <Box direction="row" justify="between" fill>
        <h1>{siteName}</h1>
        <button onClick={authHandler}>{authLabel}</button>
      </Box>
    </Header>
  );
}

function AppShellMain({ children }) {
  return (
    <Main gridArea="main">
      <Box direction="column">{children}</Box>
    </Main>
  );
}

function AppShellFooter({ copyrightYear, siteName }) {
  return (
    <Footer gridArea="footer">
      <Box direction="row" fill>
        &copy;{copyrightYear} {siteName}
      </Box>
    </Footer>
  );
}

function AppShellSidebar() {
  return (
    <Sidebar gridArea="sidebar">
      <Box direction="column">
        <AppShellNav />
      </Box>
    </Sidebar>
  );
}

function AppShellNav() {
  return (
    <nav>
      <Box direction="column">
        {config?.nav?.routes?.map((route) => (
          <NavLink key={route.key} to={route.path}>
            {route?.icon}
            {route?.label}
          </NavLink>
        ))}
      </Box>
    </nav>
  );
}
