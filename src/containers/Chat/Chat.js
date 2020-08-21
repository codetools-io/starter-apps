import React from 'react';
import { Box } from 'grommet';
import ChatLayout from 'components/ChatLayout';

export default function Chat({ children }) {
  return (
    <ChatLayout>
      <Box
        gridArea="search"
        pad="medium"
        border={[{ side: 'right' }, { side: 'bottom' }]}
      >
        search
      </Box>
      <Box gridArea="header" pad="medium" border="bottom">
        header
      </Box>
      <Box
        gridArea="sidebar"
        pad="medium"
        border={[{ side: 'right' }, { side: 'bottom' }]}
      >
        sidebar
      </Box>
      <Box gridArea="compose" pad="medium" border="right">
        compose
      </Box>
      <Box gridArea="main" pad="medium" border="bottom">
        main
      </Box>
      <Box gridArea="footer" pad="medium">
        footer
      </Box>
    </ChatLayout>
  );
}
