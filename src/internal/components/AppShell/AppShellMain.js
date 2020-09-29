import React from 'react';
import { Main } from 'grommet';

export default function AppShellMain({ children }) {
  return (
    <Main
      className="AppShellMain"
      gridArea="main"
      align="start"
      background="light-1"
      pad={{ horizontal: 'large', vertical: 'large' }}
      overflow={{ vertical: 'auto' }}
    >
      {children}
    </Main>
  );
}
