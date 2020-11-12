import React, { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Box, Header, ResponsiveContext, Sidebar, ThemeContext } from 'grommet';
import { ReactComponent as Logo } from './img/logo-1.svg';
import AppShellNav from './AppShellNav.js';

export default function AppShellSidebar({ background, nav }) {
  const theme = useContext(ThemeContext);
  const size = useContext(ResponsiveContext);
  const isMobile = useMemo(() => {
    return size === 'small';
  }, [size]);
  const navItems = useMemo(() => {
    if (isMobile && nav?.length) {
      return [
        {
          key: '/site',
          label: 'Site',
          children: [
            { key: '/home', path: '/home', label: 'Home', icon: 'Home' },
            { key: '/about', path: '/about', label: 'About', icon: 'Info' },
            {
              key: '/contact',
              path: '/contact',
              label: 'Contact',
              icon: 'ChatOption',
            },
          ],
        },
        ...nav,
      ];
    }

    return nav;
  }, [isMobile, nav]);

  return (
    <Sidebar
      className="AppShellSidebar"
      gridArea="sidebar"
      background={background || theme?.appShell?.sidebar?.background}
      pad={{ horizontal: 'none', vertical: 'medium' }}
    >
      <Box gap="medium">
        <Header
          height={isMobile ? 'xxsmall' : 'xsmall'}
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

        <AppShellNav nav={navItems} isMobile={isMobile} />
      </Box>
    </Sidebar>
  );
}
