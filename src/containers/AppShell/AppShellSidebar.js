import React from 'react';
import { Box, Sidebar } from 'grommet';
import AppShellNav from './AppShellNav.js';

export default function AppShellSidebar() {
  return (
    <Sidebar
      className="AppShellSidebar"
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
