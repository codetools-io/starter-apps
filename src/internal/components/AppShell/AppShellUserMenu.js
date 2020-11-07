import React from 'react';
import { Avatar, Box, Button, DropButton, Text } from 'grommet';
import { Bookmark, Logout } from 'grommet-icons';
import Link from 'internal/components/Link';

export default function AppShellUserMenu({ currentUser, logout = () => {} }) {
  return (
    <DropButton
      icon={<Avatar src={currentUser?.attributes?.picture} />}
      dropContent={
        <Box pad="medium" gap="medium">
          <Link to="/bookmarks">
            <Box direction="row" gap="small" justify="between">
              <Bookmark style={{ marginLeft: '-5px' }} /> bookmarks
            </Box>
          </Link>
          <Button
            onClick={logout}
            label={
              <Box direction="row" gap="small" justify="between">
                <Logout /> <Text color="brand-2">logout</Text>
              </Box>
            }
            margin="none"
            plain
          />
        </Box>
      }
      dropAlign={{ top: 'bottom', right: 'right' }}
      plain
    />
  );
}
