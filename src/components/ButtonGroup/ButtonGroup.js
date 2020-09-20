import React, { useContext } from 'react';
import { Box, Button, ThemeContext } from 'grommet';

export default function ButtonGroup({
  buttons,
  pad = {
    vertical: 'xsmall',
    horizontal: 'medium',
  },
  ...props
}) {
  const theme = useContext(ThemeContext);

  return (
    <Box className="ButtonGroup" direction="row" align="center" {...props}>
      React.Children.map(children, function () {})
    </Box>
  );
}
