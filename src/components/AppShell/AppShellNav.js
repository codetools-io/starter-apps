import React, { useContext, useMemo } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { useLocalStorage } from 'react-use';
import classNames from 'classnames';
import {
  Box,
  Collapsible,
  Nav,
  ResponsiveContext,
  Text,
  ThemeContext,
} from 'grommet';
import { Down, Up } from 'grommet-icons';
import * as config from 'config';

function AppShellNavSection({ id, name, routes }) {
  return (
    <Box className="AppShellNavSection" gap="small">
      <Box pad={{ horizontal: 'medium' }}>
        <Text weight="bold">{name}</Text>
      </Box>
      <Box gap="none">
        {routes?.map((route) => (
          <AppShellNavItem key={route.id} {...route} />
        ))}
      </Box>
    </Box>
  );
}

function AppShellNavItem({
  id,
  path,
  icon,
  label,
  menuBackground,
  routes,
  isNested = false,
  ...rest
}) {
  const theme = useContext(ThemeContext);
  const size = useContext(ResponsiveContext);
  const [nav, setNav] = useLocalStorage('nav', {});
  const isExpanded = useMemo(() => {
    if (size === 'small') {
      return true;
    }

    return nav?.[id];
  }, [id, nav, size]);

  function toggleMenu() {
    setNav({
      ...nav,
      [id]: !nav?.[id],
    });
  }

  if (!routes) {
    return (
      <AppShellNavLink
        to={path}
        icon={icon}
        label={label}
        isNested={isNested}
        {...rest}
      />
    );
  }

  return (
    <Box gap="xsmall">
      <Box>
        <AppShellNavLink
          icon={icon}
          secondaryIcon={
            isExpanded ? <Up size="small" /> : <Down size="small" />
          }
          label={label}
          to={path}
          onClick={(e) => {
            e.preventDefault();
            toggleMenu();
          }}
          isNested={isNested}
          {...rest}
        />
      </Box>
      <Collapsible direction="vertical" open={isExpanded}>
        <Box
          className="AppShellNavMenu"
          gap="xsmall"
          background={menuBackground || theme?.appShell?.nav?.menu?.background}
          fill="horizontal"
        >
          {routes.map((route) => {
            return <AppShellNavItem key={route.id} {...route} isNested />;
          })}
        </Box>
      </Collapsible>
    </Box>
  );
}

function AppShellNavLink({
  activeBackground,
  children,
  to,
  icon,
  secondaryIcon,
  label,
  size = 'large',
  onClick = (event) => {},
  isNested,
  ...props
}) {
  const theme = useContext(ThemeContext);
  const screenSize = useContext(ResponsiveContext);
  const className = classNames({
    AppShellNavLink: true,
    'is-small': screenSize === 'small',
  });

  return (
    <RouterNavLink
      className={className}
      to={to}
      style={{
        ...theme.anchor,
        ...theme?.appShell?.nav?.link,
        fontWeight: 'normal',
      }}
      activeStyle={{
        ...theme.anchor,
        ...theme?.appShell?.nav?.active,
        fontWeight: 'bold',
      }}
      onClick={onClick}
      exact
      strict
      {...props}
    >
      <Box
        direction="row"
        align="center"
        pad={{
          horizontal: 'medium',
          vertical: 'small',
        }}
        gap="medium"
      >
        {icon && (
          <Box className="NavLink__icon">
            <Text color={theme?.appShell?.nav?.icon?.color}>{icon}</Text>
          </Box>
        )}

        {label && (
          <Box
            className="NavLink__label"
            margin={{ left: isNested ? 'medium' : 'none' }}
            flex
          >
            <Text
              size={size}
              color={theme?.appShell?.nav?.link?.color}
              margin={{ left: isNested ? 'medium' : 'none' }}
              truncate
            >
              {label}
            </Text>
          </Box>
        )}

        {secondaryIcon && (
          <Box className="NavLink__secondaryIcon">
            <Text color={theme?.appShell?.nav?.icon?.color}>
              {secondaryIcon}
            </Text>
          </Box>
        )}
      </Box>
    </RouterNavLink>
  );
}

export default function AppShellNav() {
  return (
    <Nav className="AppShellNav" gap="medium">
      {config?.nav?.sections?.map((section) => (
        <AppShellNavSection key={section.id} {...section} />
      ))}
    </Nav>
  );
}
