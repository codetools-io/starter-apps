import React, { useContext } from 'react';
import { Box, Header, Sidebar, ThemeContext } from 'grommet';
import { ReactComponent as Logo } from './img/logo-1.svg';

import AppShellNav from './AppShellNav.js';

export default function AppShellSidebar({ background }) {
  const theme = useContext(ThemeContext);

  return (
    <Sidebar
      className="AppShellSidebar"
      gridArea="sidebar"
      background={background || theme?.appShell?.sidebar?.background}
      pad={{ horizontal: 'none', vertical: 'large' }}
      overflow={{ vertical: 'auto' }}
    >
      <Box gap="large">
        <Header
          height="xsmall"
          width="100%"
          pad={{ horizontal: 'medium', vertical: 'small' }}
          align="center"
          justify="center"
        >
          <Logo
            style={{
              height: '100%',
              maxWidth: '100%',
              maxHeight: '100%',
              color: '#fff',
            }}
          />
        </Header>
        <AppShellNav />
      </Box>
    </Sidebar>
  );
}
