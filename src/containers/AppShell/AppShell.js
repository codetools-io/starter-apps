import React, { useEffect, useRef, useState } from 'react';
import {
  Avatar,
  Box,
  DropButton,
  Grid,
  Grommet,
  Text,
  TextInput,
} from 'grommet';
import { Search } from 'grommet-icons';
import useAppShell from './useAppShell';
import * as config from 'config';
import AppShellHeader from './AppShellHeader';
import AppShellMain from './AppShellMain';
import AppShellSidebar from './AppShellSidebar';

import './AppShell.css';

export default function AppShell({ children, ...props }) {
  const { authHandler, authLabel, user, userInitials } = useAppShell();

  return (
    <Grommet className="AppShell" theme={config?.theme} full>
      <Grid
        className="AppShellContainer"
        rows={['xsmall', 'auto']}
        columns={['1/4', '1/4', '1/4', '1/4']}
        areas={[
          ['header', 'header', 'header', 'header'],
          ['sidebar', 'main', 'main', 'main'],
        ]}
        style={{
          height: '100vh',
        }}
      >
        <AppShellHeader
          authHandler={authHandler}
          authLabel={authLabel}
          logo={config.site.logo}
          logoSmall={config.site.logoSmall}
          userInitials={userInitials}
          userProfile={user?.profile}
          siteName={config?.site?.name}
        />
        <AppShellSidebar />
        <AppShellMain>{children}</AppShellMain>
      </Grid>
    </Grommet>
  );
}

function AppShellSearch({ searchHandler }) {
  const searchInput = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => searchInput.current.focus(), 0);
    }
  }, [isOpen]);
  return (
    <DropButton
      icon={<Search color="text" />}
      dropAlign={{ right: 'left' }}
      dropContent={
        <Box direction="row" pad={{ vertical: 'small' }}>
          <TextInput
            ref={searchInput}
            placeholder="Search…"
            name="search"
            type="search"
          />
        </Box>
      }
      dropProps={{
        elevation: 'none',
      }}
      onClose={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
    />
  );
}

function AppShellMenu({ authHandler, authLabel, userInitials, userProfile }) {
  return (
    <DropButton
      icon={
        <Avatar background="brand" src={userProfile}>
          {userInitials}
        </Avatar>
      }
      dropAlign={{ top: 'bottom', right: 'right' }}
      dropContent={
        <Box pad="medium">
          <Text onClick={authHandler}>{authLabel}</Text>
        </Box>
      }
    />
  );
}
