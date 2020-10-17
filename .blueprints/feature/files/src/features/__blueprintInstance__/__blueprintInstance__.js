import React from 'react';
import { Box } from 'grommet';
import use{{blueprintInstance}} from './use{{blueprintInstance}}';

export default function {{blueprintInstance}} ({ children, ...props }) {
  const state = use{{blueprintInstance}}();

  return <Box className="{{blueprintInstance}}" {...props}>{children}</Box>;
};



