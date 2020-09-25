import React, { useEffect, useRef, useState } from 'react';
import { Box, DropButton, TextInput } from 'grommet';
import { Search } from 'grommet-icons';

export default function AppShellSearch({ searchHandler }) {
  const searchInput = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => searchInput.current.focus(), 0);
    }
  }, [isOpen]);
  return (
    <DropButton
      className="AppShellSearch"
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
