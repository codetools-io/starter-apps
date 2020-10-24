import React from 'react';
import { Box } from 'grommet';
import useImageEditor from './useImageEditor';

export default function ImageEditor ({ children, ...props }) {
  const state = useImageEditor();

  return <Box className="ImageEditor" {...props}>{children}</Box>;
};



