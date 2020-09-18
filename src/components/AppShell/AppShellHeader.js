import React from 'react';
import { Grid, Header } from 'grommet';
import AppShellLogo from './AppShellLogo';

export default function AppShellHeader({ logo, ...props }) {
  return (
    <Header gridArea="header" className="AppShellHeader" {...props}>
      <Grid columns={['100%']} areas={[['logo']]} align="center" fill>
        <AppShellLogo
          logo={logo}
          height={{ max: '100%' }}
          width={{ max: '100%' }}
        />
      </Grid>
    </Header>
  );
}
