import React from 'react';
import { Box, Text, ThemeContext } from 'grommet';
import { NavLink as RouterNavLink } from 'react-router-dom';
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
  return (
    <ThemeContext.Consumer>
      {(theme) => {
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
            >
              {icon && (
                <Box>
                  <Text
                    margin={{ right: 'medium' }}
                    color={theme.global.colors['brand-contrast']}
                  >
                    {icon}
                  </Text>
                </Box>
              )}

              {label && (
                <Box margin={{ left: isNested ? 'medium' : 'none' }} fill>
                  <Text
                    color={color}
                    size={size}
                    weight={weight}
                    margin={{ left: isNested ? 'small' : 'none' }}
                  >
                    {label}
                  </Text>
                </Box>
              )}

              {secondaryIcon && (
                <Box>
                  <Text
                    margin={{ left: 'medium' }}
                    color={theme.global.colors['brand-contrast']}
                  >
                    {secondaryIcon}
                  </Text>
                </Box>
              )}
            </Box>
          </RouterNavLink>
        );
      }}
    </ThemeContext.Consumer>
  );
}
