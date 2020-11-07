import React from 'react';
import { Avatar, Box, Button, Nav } from 'grommet';
import Link from 'internal/components/Link';
export default function AppShellHeader({
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
        <Avatar src={currentUser?.attributes?.picture} />
      ) : (
        <Button label="Login" onClick={login} />
      )}
    </Box>
  );
}
