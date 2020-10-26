import React from 'react';
import { Box, Sidebar } from 'grommet';
import AppShellNav from './AppShellNav.js';

export default function AppShellSidebar({ background = 'brand' }) {
  return (
    <Sidebar
      className="AppShellSidebar"
      gridArea="sidebar"
      background={background}
      pad={{ horizontal: 'none', vertical: 'medium' }}
      overflow={{ vertical: 'auto' }}
    >
      <Box>
        <AppShellNav />
      </Box>
    </Sidebar>
  );
}
