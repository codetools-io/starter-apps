import React from 'react';
import { Grid } from 'grommet';
import * as config from './config';
import useAppShell from './useAppShell';
import AppShellHeader from './AppShellHeader';
import AppShellMain from './AppShellMain';
import AppShellSidebar from './AppShellSidebar';

import './AppShell.css';

export default function AppShell({ children, ...props }) {
  const { authHandler, authLabel, user, userInitials } = useAppShell();

  return (
    <Grid
      className="AppShellContainer"
      rows={['xsmall', 'auto']}
      columns={['1/4', '1/4', '1/4', '1/4']}
      areas={[
        ['header', 'header', 'header', 'header'],
        ['sidebar', 'main', 'main', 'main'],
      ]}
      fill
    >
      <AppShellHeader
        authHandler={authHandler}
        authLabel={authLabel}
        logo={config?.site.logo}
        logoSmall={config?.site.logoSmall}
        userInitials={userInitials}
        userProfile={user?.profile}
        siteName={config?.site?.name}
      />
      <AppShellSidebar />
      <AppShellMain>{children}</AppShellMain>
    </Grid>
  );
}
