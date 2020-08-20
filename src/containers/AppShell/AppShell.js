import React from 'react';
import {
  Box,
  Footer,
  Grid,
  Grommet,
  Header,
  Heading,
  Main,
  Nav,
  Sidebar,
} from 'grommet';
import NavLink from 'components/NavLink';
import * as config from 'config';

export default function AppShell({ children, ...props }) {
  const isAuthenticated = true;
  const login = () => {};
  const logout = () => {};
  const authHandler = isAuthenticated ? logout : login;
  const authLabel = isAuthenticated ? 'logout' : 'login';

  return (
    <Grommet className="AppShell" theme={config?.theme} full>
      <Grid
        rows={['xsmall', 'flex', 'auto']}
        columns={['1/4', '1/4', '1/4', '1/4']}
        areas={[
          ['header', 'header', 'header', 'header'],
          ['sidebar', 'main', 'main', 'main'],
          ['sidebar', 'footer', 'footer', 'footer'],
        ]}
        fill="vertical"
      >
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

function AppShellHeader({ siteName, authHandler = () => {}, authLabel }) {
  return (
    <Header gridArea="header">
      <Grid
        columns={['1/4', '3/4']}
        areas={[['logo', 'menu']]}
        align="center"
        fill
      >
        <Box background="brand-3" gridArea="logo" pad="medium">
          <Heading level="3" textAlign="center" color="white">
            {siteName}
          </Heading>
        </Box>
        <Box gridArea="menu" direction="row" justify="end" pad="medium">
          <Box>
            <button onClick={authHandler}>{authLabel}</button>
          </Box>
        </Box>
      </Grid>
    </Header>
  );
}

function AppShellSidebar() {
  return (
    <Sidebar gridArea="sidebar" background="brand" pad="none">
      <Box>
        <AppShellNav />
      </Box>
    </Sidebar>
  );
}

function AppShellNav() {
  return (
    <Nav gap="none">
      {config?.nav?.routes?.map((route) => (
        <NavLink
          key={route.key}
          to={route.path}
          icon={route.icon}
          label={route.label}
        />
      ))}
    </Nav>
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
