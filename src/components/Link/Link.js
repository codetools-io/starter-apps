import React from 'react';
import { Box, Text } from 'grommet';
import { Link as RouterLink } from 'react-router-dom';

export default function Link({
  children,
  path,
  icon,
  label,
  color,
  size,
  ...props
}) {
  return (
    <RouterLink to={path}>
      <Box direction="row" align="center" gap="medium" {...props}>
        {icon && (
          <Box>
            <Text color={color} size={size}>
              {icon}
            </Text>
          </Box>
        )}
        {children && (
          <Box>
            <Text color={color} size={size}>
              {children}
            </Text>
          </Box>
        )}
        {label && (
          <Box>
            <Text color={color} size={size}>
              {label}
            </Text>
          </Box>
        )}
      </Box>
    </RouterLink>
  );
}
