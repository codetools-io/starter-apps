import React from 'react';
import { Box, Grid, Header } from 'grommet';
import AppShellLogo from './AppShellLogo';
import AppShellSearch from './AppShellSearch';
import AppShellNotifications from './AppShellNotifications';
import AppShellMenu from './AppShellMenu';

export default function AppShellHeader({
  authHandler = () => {},
  authLabel,
  logo,
  logoSmall,
  searchHandler = () => {},
  siteName,
  userProfile,
  userInitials,
}) {
  return (
    <Header gridArea="header" className="AppShellHeader">
      <Grid
        columns={['1/4', '3/4']}
        rows={['auto']}
        areas={[['logo', 'menu']]}
        align="center"
        fill
      >
        <AppShellLogo
          text={siteName}
          logo={logo}
          logoSmall={logoSmall}
          height={{ max: '100%' }}
          width={{ max: '100%' }}
        />
        <Box
          gridArea="menu"
          direction="row"
          justify="end"
          pad="medium"
          gap="medium"
        >
          <AppShellSearch searchHandler={searchHandler} />
          <AppShellNotifications />
          <AppShellMenu
            authHandler={authHandler}
            authLabel={authLabel}
            userInitials={userInitials}
            userProfile={userProfile}
          />
        </Box>
      </Grid>
    </Header>
  );
}
