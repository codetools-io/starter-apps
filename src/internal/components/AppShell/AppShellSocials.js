import React from 'react';
import { Box } from 'grommet';
import { Github } from 'grommet-icons';

export default function AppShellSocials({ ...props }) {
  return (
    <Box
      className="AppShellSocials"
      gridArea="socials"
      direction="row"
      pad="medium"
      justify="end"
      align="center"
      {...props}
    >
      <Github />
    </Box>
  );
}
