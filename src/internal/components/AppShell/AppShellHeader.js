import React, { useContext } from 'react';
import { Box, Button, Layer, Nav, ResponsiveContext } from 'grommet';
import { Menu } from 'grommet-icons';
import Link from 'internal/components/Link';
import AppShellUserMenu from './AppShellUserMenu';

function AppShellMobileHeader({
  currentUser,
  login = () => {},
  logout = () => {},
}) {
  return (
    <Box
      gridArea="header"
      direction="row"
      justify="between"
      align="center"
      background="light-1"
      pad={{ horizontal: 'large', vertical: 'medium' }}
      gap="medium"
    >
      <Button icon={<Menu />} plain />
      {currentUser ? (
        <AppShellUserMenu currentUser={currentUser} logout={logout} />
      ) : (
        <Button label="Login" onClick={login} primary />
      )}
    </Box>
  );
}

function AppShellDesktopHeader({
  currentUser,
  login = () => {},
  logout = () => {},
}) {
  return (
    <Box
      gridArea="header"
      direction="row"
      justify="between"
      align="center"
      background="light-1"
      pad={{ horizontal: 'large', vertical: 'medium' }}
      gap="medium"
    >
      <Nav direction="row">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </Nav>
      {currentUser ? (
        <AppShellUserMenu currentUser={currentUser} logout={logout} />
      ) : (
        <Button label="Login" onClick={login} primary />
      )}
    </Box>
  );
}
export default function AppShellHeader({ ...props }) {
  const size = useContext(ResponsiveContext);

  if (size === 'small') {
    return <AppShellMobileHeader {...props} />;
  }
  return <AppShellDesktopHeader {...props} />;
}
