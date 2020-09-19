import React from 'react';
import { Box, Card, ThemeContext } from 'grommet';
import theme from './theme';
export default function Docs({ children, ...props }) {
  return (
    <Box className="Docs" {...props}>
      {children}
    </Box>
  );
}

export function DocsCard({ children, ...props }) {
  return (
    <Card
      className="DocsCard"
      background="white"
      fill="horizontal"
      flex={false}
      {...props}
    >
      <DocsTheme>{children}</DocsTheme>
    </Card>
  );
}

export function DocsTheme({ children, ...props }) {
  return (
    <ThemeContext.Extend value={theme} {...props}>
      {children}
    </ThemeContext.Extend>
  );
}
