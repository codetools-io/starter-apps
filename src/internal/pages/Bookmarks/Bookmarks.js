import React from 'react';
import { Box, Card, Heading } from 'grommet';

export default function Bookmarks({ children, ...props }) {
  return (
    <Box className="Bookmarks" fill {...props}>
      <Card pad="large" background="white" fill>
        <Heading
          level={1}
          margin={{ horizontal: 'auto' }}
          textAlign="center"
          fill
        >
          Coming Soon!
        </Heading>
      </Card>
    </Box>
  );
}
