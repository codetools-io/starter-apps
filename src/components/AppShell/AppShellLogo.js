import React from 'react';
import { Box } from 'grommet';

export default function AppShellLogo({
  background = 'brand-3',
  logo,
  ...props
}) {
  return (
    <Box
      className="AppShellLogo"
      background={background}
      gridArea="logo"
      pad="medium"
      justify="center"
      fill
      {...props}
    >
      {logo}
    </Box>
  );
}
