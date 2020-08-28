import React, { useContext } from 'react';
import { Box, Text, ResponsiveContext, ThemeContext } from 'grommet';
import { NavLink as RouterNavLink } from 'react-router-dom';
import classNames from 'classnames';
import './NavLink.css';

export default function NavLink({
  children,
  to,
  icon,
  secondaryIcon,
  label,
  color,
  size = 'large',
  weight = 'normal',
  onClick = (event) => {},
  isNested,
  ...props
}) {
  const theme = useContext(ThemeContext);
  const screenSize = useContext(ResponsiveContext);
  const className = classNames({
    NavLink: true,
    'is-small': screenSize === 'small',
  });
  return (
    <RouterNavLink
      className={className}
      to={to}
      style={{
        ...theme.anchor,
        color: theme.global.colors['brand-contrast'],
      }}
      activeStyle={{
        ...theme.anchor,
        backgroundColor: theme.global.colors['brand-3'],
        color: theme.global.colors['brand-contrast'],
      }}
      onClick={onClick}
      exact
      strict
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
            <Text color={theme.global.colors['brand-contrast']}>{icon}</Text>
          </Box>
        )}

        {label && (
          <Box
            className="NavLink__label"
            margin={{ left: isNested ? 'medium' : 'none' }}
            flex
          >
            <Text
              color={color}
              size={size}
              weight={weight}
              margin={{ left: isNested ? 'small' : 'none' }}
              truncate
            >
              {label}
            </Text>
          </Box>
        )}

        {secondaryIcon && (
          <Box className="NavLink__secondaryIcon">
            <Text color={theme.global.colors['brand-contrast']}>
              {secondaryIcon}
            </Text>
          </Box>
        )}
      </Box>
    </RouterNavLink>
  );
}
