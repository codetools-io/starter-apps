import React from 'react';
import { Box, Button } from 'grommet';

export default function AppShellHeader({
  currentUser,
  login = () => {},
  logout = () => {},
}) {
  return (
    <Box
      gridArea="header"
      direction="row"
      justify="end"
      background="light-1"
      pad={{ horizontal: 'large', vertical: 'medium' }}
      gap="medium"
    >
      {currentUser ? (
        <Button label="Logout" onClick={logout} />
      ) : (
        <Button label="Login" onClick={login} />
      )}
    </Box>
  );
}
