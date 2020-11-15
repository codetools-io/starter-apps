import React from 'react';
import { Avatar, Box, DropButton, Text } from 'grommet';

export default function AppShellMenu({
  authHandler,
  authLabel,
  userInitials,
  userProfile,
}) {
  return (
    <DropButton
      className="AppShellMenu"
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
      plain
    />
  );
}
