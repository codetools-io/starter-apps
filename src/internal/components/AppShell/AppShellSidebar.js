import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Box, Header, Sidebar, ThemeContext } from 'grommet';

import { ReactComponent as Logo } from './img/logo-1.svg';
import AppShellNav from './AppShellNav.js';

export default function AppShellSidebar({ background, nav }) {
  const theme = useContext(ThemeContext);

  return (
    <Sidebar
      className="AppShellSidebar"
      gridArea="sidebar"
      background={background || theme?.appShell?.sidebar?.background}
      pad={{ horizontal: 'none', vertical: 'medium' }}
      overflow={{ vertical: 'auto' }}
    >
      <Box gap="medium">
        <Header
          height="xsmall"
          width="100%"
          pad={{ horizontal: 'medium', vertical: 'medium' }}
          align="center"
          justify="center"
        >
          <Link
            to="/"
            style={{
              height: '100%',
              maxWidth: '100%',
              maxHeight: '100%',
              color: '#fff',
            }}
          >
            <Logo
              style={{
                height: '100%',
                maxWidth: '100%',
                maxHeight: '100%',
              }}
            />
          </Link>
        </Header>

        <AppShellNav nav={nav} />
      </Box>
    </Sidebar>
  );
}
