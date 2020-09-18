import React from 'react';
import { Box, Card, Grid, ThemeContext } from 'grommet';
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
    <Card className="DocsCard" background="white" fill="horizontal">
      <ThemeContext.Extend value={theme}>{children}</ThemeContext.Extend>
    </Card>
  );
}
