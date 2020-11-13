import React, { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Header,
  Layer,
  ResponsiveContext,
  Sidebar,
  ThemeContext,
} from 'grommet';
import { ReactComponent as Logo } from './img/logo-1.svg';
import AppShellNav from './AppShellNav.js';
import AppShellHeader from './AppShellHeader.js';

function AppShellMobileNav({
  nav = [],
  background,
  toggleMenu = () => {},
  showMenu = false,
}) {
  const theme = useContext(ThemeContext);
  if (!showMenu) {
    return null;
  }
  return (
    <Layer
      position="bottom"
      onEsc={() => {
        toggleMenu(false);
      }}
      onClickOutside={() => {
        toggleMenu(false);
      }}
      plain
    >
      <Box flex={false} style={{ position: 'sticky', top: '0px' }}>
        <AppShellHeader showMenu={showMenu} toggleMenu={toggleMenu} />
      </Box>
      <Sidebar
        className="AppShellSidebar"
        background={background || theme?.appShell?.sidebar?.background}
        pad={{ horizontal: 'none', vertical: 'medium' }}
        overflow="auto"
        flex
      >
        <Box gap="medium">
          <Header
            height="xxsmall"
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

          <AppShellNav
            nav={[
              {
                key: '/site',
                label: 'Site',
                children: [
                  {
                    key: '/home',
                    path: '/home',
                    label: 'Home',
                    icon: 'Home',
                  },
                  {
                    key: '/about',
                    path: '/about',
                    label: 'About',
                    icon: 'Info',
                  },
                  {
                    key: '/contact',
                    path: '/contact',
                    label: 'Contact',
                    icon: 'ChatOption',
                  },
                ],
              },
              ...nav,
            ]}
            isMobile={true}
          />
        </Box>
      </Sidebar>
    </Layer>
  );
}
function AppShellDesktopNav({ nav = [], background }) {
  const theme = useContext(ThemeContext);
  return (
    <Sidebar
      className="AppShellSidebar"
      gridArea="sidebar"
      background={background || theme?.appShell?.sidebar?.background}
      pad={{ horizontal: 'none', vertical: 'medium' }}
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

        <AppShellNav nav={nav} isMobile={false} />
      </Box>
    </Sidebar>
  );
}
export default function AppShellSidebar({
  background,
  nav,
  showMenu = false,
  toggleMenu = () => {},
}) {
  const size = useContext(ResponsiveContext);
  const isMobile = useMemo(() => {
    return size === 'small';
  }, [size]);

  if (isMobile === false) {
    return <AppShellDesktopNav nav={nav} background={background} />;
  }

  return (
    <AppShellMobileNav
      nav={nav}
      showMenu={showMenu}
      toggleMenu={toggleMenu}
      background={background}
    />
  );
}
