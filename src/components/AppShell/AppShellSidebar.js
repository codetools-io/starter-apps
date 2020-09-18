import React from 'react';
import { Box, Header, Sidebar } from 'grommet';
import { ReactComponent as Logo } from './img/logo.svg';

import AppShellNav from './AppShellNav.js';

export default function AppShellSidebar({ background = 'brand-3' }) {
  return (
    <Sidebar
      className="AppShellSidebar"
      gridArea="sidebar"
      background={background}
      pad={{ horizontal: 'none', vertical: 'medium' }}
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
              color: 'white',
            }}
          />
        </Header>
        <AppShellNav />
      </Box>
    </Sidebar>
  );
}
