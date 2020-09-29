import React, { useRef } from 'react';
import { Box, TextInput } from 'grommet';
import { Search } from 'grommet-icons';

export default function AppShellSearch({ searchHandler }) {
  const searchInput = useRef(null);

  return (
    <Box direction="row" pad={{ vertical: 'small' }} gap="small">
      <TextInput
        ref={searchInput}
        placeholder="Search…"
        icon={<Search color="text-xweak" />}
        name="search"
        type="search"
      />
    </Box>
  );
}
