import React, { useRef, useState } from 'react';
import { Box, Button, Drop } from 'grommet';

export default function TooltipButton({
  align = { bottom: 'top' },
  dropProps = {},
  icon,
  tooltip,
  tooltipProps = {
    pad: 'xsmall',
    background: 'TooltipButtonBackgroundColor',
  },
  ...props
}) {
  const [over, setOver] = useState(false);
  const ref = useRef();

  return (
    <Box>
      <Button
        ref={ref}
        onMouseOver={() => setOver(true)}
        onMouseLeave={() => setOver(false)}
        plain
        {...props}
      >
        <Box pad={{ vertical: 'small' }} align="center">
          {icon}
        </Box>
      </Button>
      {ref.current && over && (
        <Drop
          align={align}
          target={ref.current}
          plain
          trapFocus={false}
          {...dropProps}
        >
          <Box {...tooltipProps}>{tooltip}</Box>
        </Drop>
      )}
    </Box>
  );
}
