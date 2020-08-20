import React from 'react';
import { Box, Text, ThemeContext } from 'grommet';
import { NavLink as RouterNavLink } from 'react-router-dom';
import './NavLink.css';

export default function NavLink({
  children,
  to,
  icon,
  label,
  color,
  size = 'large',
  weight = 'normal',
  ...props
}) {
  return (
    <ThemeContext.Consumer>
      {(theme) => {
        console.log(theme);
        return (
          <RouterNavLink
            className="NavLink"
            to={to}
            style={{
              ...theme.anchor,
              color: theme.global.colors['brand-contrast'],
            }}
            activeStyle={{
              ...theme.anchor,
              backgroundColor: theme.global.colors['brand-2'],
              color: theme.global.colors['brand-contrast'],
            }}
            strict
          >
            <Box
              direction="row"
              align="center"
              pad={{ horizontal: 'medium', vertical: 'small' }}
            >
              {icon && (
                <Text
                  margin={{ right: 'medium' }}
                  color={theme.global.colors['brand-contrast']}
                >
                  {icon}
                </Text>
              )}

              {label && (
                <Text color={color} size={size} weight={weight}>
                  {label}
                </Text>
              )}
            </Box>
          </RouterNavLink>
        );
      }}
    </ThemeContext.Consumer>
  );
}
