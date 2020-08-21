import React, { useEffect, useRef, useState } from 'react';
import {
  Avatar,
  Box,
  DropButton,
  Footer,
  Grid,
  Grommet,
  Header,
  Heading,
  Main,
  Nav,
  Sidebar,
  Stack,
  Text,
  TextInput,
} from 'grommet';
import { Cart, ChatOption, Notification, Search } from 'grommet-icons';
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

function AppShellHeader({
  siteName,
  authHandler = () => {},
  authLabel,
  searchHandler = () => {},
}) {
  return (
    <Header gridArea="header">
      <Grid
        columns={['1/4', '3/4']}
        areas={[['logo', 'menu']]}
        align="center"
        fill
      >
        <AppShellLogo text={siteName} />
        <AppShellMenu
          authHandler={authHandler}
          authLabel={authLabel}
          searchHandler={searchHandler}
        />
      </Grid>
    </Header>
  );
}

function AppShellLogo({ text }) {
  return (
    <Box background="brand-3" gridArea="logo" pad="medium">
      <Heading level="3" textAlign="center" color="white">
        {text}
      </Heading>
    </Box>
  );
}

function AppShellMenu({ authHandler, authLabel, searchHandler }) {
  return (
    <Box
      gridArea="menu"
      direction="row"
      justify="end"
      pad="medium"
      gap="medium"
    >
      <AppShellSearch searchHandler={searchHandler} />
      <AppShellNotifications
        icon={<Notification size="medium" color="text" />}
        notifications={[{}]}
      />
      <AppShellNotifications
        icon={<ChatOption size="medium" color="text" />}
        notifications={[{}]}
      />
      <AppShellNotifications
        icon={<Cart size="medium" color="text" />}
        notifications={[{}]}
      />
      <AppShellUserMenu authHandler={authHandler} authLabel={authLabel} />
    </Box>
  );
}

function AppShellSearch({ searchHandler }) {
  const searchInput = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => searchInput.current.focus(), 0);
    }
  }, [isOpen]);
  return (
    <DropButton
      icon={<Search color="text" />}
      dropAlign={{ top: 'top', right: 'left' }}
      dropContent={
        <Box direction="row" pad={{ vertical: 'small' }}>
          <TextInput
            ref={searchInput}
            placeholder="Search…"
            name="search"
            type="search"
          />
        </Box>
      }
      dropProps={{
        elevation: 'none',
      }}
      onClose={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
    />
  );
}

function AppShellUserMenu({ authHandler, authLabel }) {
  return (
    <DropButton
      icon={<Avatar background="brand">AP</Avatar>}
      dropAlign={{ top: 'bottom', right: 'right' }}
      dropContent={
        <Box pad="medium">
          <Text onClick={authHandler}>{authLabel}</Text>
        </Box>
      }
    />
  );
}

function AppShellNotifications({ icon, notifications = [] }) {
  return (
    <DropButton
      icon={
        <Box>
          <Stack anchor="top-right">
            {icon}
            <Box
              align="center"
              justify="center"
              background="brand-2"
              pad={{ horizontal: 'xsmall' }}
              width={{ min: '18px' }}
              height={{ min: '18px' }}
              margin={{ top: '-7px', right: '-7px' }}
              round
            >
              <Text size="xsmall">{notifications?.length}</Text>
            </Box>
          </Stack>
        </Box>
      }
      dropAlign={{ top: 'bottom', right: 'right' }}
      dropContent={false}
    />
  );
}

function AppShellSidebar() {
  return (
    <Sidebar
      gridArea="sidebar"
      background="brand"
      pad={{ horizontal: 'none', vertical: 'medium' }}
    >
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
    <Main gridArea="main" align="start" background="light-1">
      {children}
    </Main>
  );
}

function AppShellFooter({ copyrightYear, siteName }) {
  return (
    <Footer gridArea="footer">
      <Box direction="row" pad="medium" fill>
        &copy;{copyrightYear} {siteName}
      </Box>
    </Footer>
  );
}
