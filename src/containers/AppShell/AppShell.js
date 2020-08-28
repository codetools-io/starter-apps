import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import {
  Avatar,
  Box,
  Collapsible,
  DropButton,
  Grid,
  Grommet,
  Header,
  Heading,
  Image,
  Main,
  Nav,
  ResponsiveContext,
  Sidebar,
  Stack,
  Text,
  TextInput,
} from 'grommet';
import {
  Cart,
  ChatOption,
  Down,
  Notification,
  Search,
  Up,
} from 'grommet-icons';
import { useLocalStorage } from 'react-use';
import NavLink from 'components/NavLink';
import * as config from 'config';
import * as data from 'data';

export default function AppShell({ children, ...props }) {
  const isAuthenticated = true;
  const login = () => {};
  const logout = () => {};
  const authHandler = isAuthenticated ? logout : login;
  const authLabel = isAuthenticated ? 'logout' : 'login';

  return (
    <Grommet className="AppShell" theme={config?.theme} full>
      <Grid
        rows={['xsmall', 'auto']}
        columns={['1/4', '1/4', '1/4', '1/4']}
        areas={[
          ['header', 'header', 'header', 'header'],
          ['sidebar', 'main', 'main', 'main'],
        ]}
        height={{ min: '100vh' }}
      >
        <AppShellHeader
          authHandler={authHandler}
          authLabel={authLabel}
          logo={config.site.logo}
          logoSmall={config.site.logoSmall}
          userInitials={`${data?.users?.user1?.firstName[0]}${data?.users?.user1?.lastName[0]}`}
          userProfile={data?.users?.user1?.profile}
          siteName={config?.site?.name}
        />
        <AppShellSidebar />
        <AppShellMain>{children}</AppShellMain>
      </Grid>
    </Grommet>
  );
}

function AppShellHeader({
  authHandler = () => {},
  authLabel,
  logo,
  logoSmall,
  searchHandler = () => {},
  siteName,
  userProfile,
  userInitials,
}) {
  return (
    <Header gridArea="header">
      <Grid
        columns={['1/4', '3/4']}
        areas={[['logo', 'menu']]}
        align="center"
        fill
      >
        <AppShellLogo
          text={siteName}
          logo={logo}
          logoSmall={logoSmall}
          height={{ max: '100%' }}
          width={{ max: '100%' }}
        />
        <AppShellMenu
          authHandler={authHandler}
          authLabel={authLabel}
          userInitials={userInitials}
          userProfile={userProfile}
          searchHandler={searchHandler}
        />
      </Grid>
    </Header>
  );
}

function AppShellLogo({ text, logo, logoSmall, ...props }) {
  const showText = !logo && text;
  const size = useContext(ResponsiveContext);
  const style = useMemo(() => {
    if (size === 'small') {
      return { maxHeight: '32px', maxWidth: '100%' };
    }
    return { maxHeight: '100%', maxWidth: '100%' };
  }, [size]);
  return (
    <Box
      background="brand-3"
      gridArea="logo"
      pad="medium"
      justify="center"
      fill
      {...props}
    >
      {showText ? (
        <Heading level="3" textAlign="center" color="white">
          {text}
        </Heading>
      ) : (
        <Image
          src={size === 'small' ? logoSmall : logo}
          fit="contain"
          style={style}
        />
      )}
    </Box>
  );
}

function AppShellMenu({
  authHandler,
  authLabel,
  searchHandler,
  userInitials,
  userProfile,
}) {
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
      <AppShellUserMenu
        authHandler={authHandler}
        authLabel={authLabel}
        userInitials={userInitials}
        userProfile={userProfile}
      />
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

function AppShellUserMenu({
  authHandler,
  authLabel,
  userInitials,
  userProfile,
}) {
  return (
    <DropButton
      icon={
        <Avatar background="brand" src={userProfile}>
          {userInitials}
        </Avatar>
      }
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
      dropContent={<Box></Box>}
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
        <AppShellNavItem key={route.id} {...route} />
      ))}
    </Nav>
  );
}

function AppShellNavItem({ id, path, icon, label, routes, isNested = false }) {
  const size = useContext(ResponsiveContext);
  const [nav, setNav] = useLocalStorage('nav', {});
  const isExpanded = useMemo(() => {
    if (size === 'small') {
      return true;
    }

    return nav?.[id];
  }, [id, nav, size]);

  function toggleMenu() {
    setNav({
      ...nav,
      [id]: !nav?.[id],
    });
  }

  if (!routes) {
    return <NavLink to={path} icon={icon} label={label} isNested={isNested} />;
  }

  return (
    <Box gap="xsmall">
      <Box>
        <NavLink
          icon={icon}
          secondaryIcon={
            isExpanded ? <Up size="small" /> : <Down size="small" />
          }
          label={label}
          to={path}
          onClick={(e) => {
            e.preventDefault();
            toggleMenu();
          }}
          isNested={isNested}
        />
      </Box>
      <Collapsible direction="vertical" open={isExpanded}>
        <Box
          gap="xsmall"
          pad={{ horizontal: 'none', vertical: 'xsmall' }}
          background="brand-2"
          fill="horizontal"
        >
          {routes.map((route) => {
            return <AppShellNavItem key={route.id} {...route} isNested />;
          })}
        </Box>
      </Collapsible>
    </Box>
  );
}

function AppShellMain({ children }) {
  return (
    <Main
      gridArea="main"
      align="start"
      background="light-1"
      pad={{ horizontal: 'medium', vertical: 'medium' }}
    >
      {children}
    </Main>
  );
}
