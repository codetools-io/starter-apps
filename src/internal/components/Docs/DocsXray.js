import React from 'react';
import { Box } from 'grommet';

import DocsCard from './DocsCard';

function DocsXrayChild({ children, nestLevel = 0 }) {
  return React.Children.map(children, (child) => {
    if (nestLevel < 20) {
      console.log(nestLevel, child);
      return (
        <Box className="XrayChild" border>
          <DocsXrayChild children={child} nestLevel={nestLevel + 1} />
        </Box>
      );
    }
    return null;
  });
}
export default function DocsXray({ children, ...props }) {
  return (
    <DocsCard height="large" flex={false} {...props}>
      <Box overflow="auto" fill>
        <DocsXrayChild children={children} />
      </Box>
    </DocsCard>
  );
}
