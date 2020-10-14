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
import Icon from 'internal/components/Icon';
import { Up, Down } from 'grommet-icons';

function AppShellNavSection({ label, children }) {
  return (
    <Box className="AppShellNavSection" gap="small">
      <Box pad={{ horizontal: 'large' }}>
        <Text weight="bold">{label}</Text>
      </Box>
      <Box gap="none">
        {children?.map((child) => (
          <AppShellNavItem {...child} />
        ))}
      </Box>
    </Box>
  );
}

function AppShellNavItem({
  path,
  icon,
  label,
  menuBackground,
  children,
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

    return nav?.[path];
  }, [path, nav, size]);

  function toggleMenu() {
    setNav({
      ...nav,
      [path]: !nav?.[path],
    });
  }

  if (!children) {
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
          {children.map((child) => {
            return <AppShellNavItem key={child.id} {...child} isNested />;
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
  size = 'medium',
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
          horizontal: 'large',
          vertical: 'small',
        }}
        gap="medium"
      >
        {icon && (
          <Box className="NavLink__icon">
            <Text color={theme?.appShell?.nav?.icon?.color}>
              <Icon name={icon} size="small" />
            </Text>
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

export default function AppShellNav({ nav, ...props }) {
  return (
    <Nav className="AppShellNav" gap="medium" {...props}>
      {nav?.map((section) => (
        <AppShellNavSection {...section} />
      ))}
    </Nav>
  );
}
