import React, { useRef, useState } from 'react';
import { Box, Button, Drop, Text } from 'grommet';

export default function Tooltip({ icon, name }) {
  const [over, setOver] = useState(false);
  const ref = useRef();
  return (
    <Box>
      <Button
        ref={ref}
        onMouseOver={() => setOver(true)}
        onMouseLeave={() => setOver(false)}
        onFocus={() => setOver(true)}
        onBlur={() => setOver(false)}
        plain
      >
        <Box pad={{ vertical: 'small' }} align="center">
          {icon}
        </Box>
      </Button>
      {ref.current && over && (
        <Drop
          align={{ left: 'right' }}
          target={ref.current}
          plain
          // trapFocus set to false allows tabbing through
          trapFocus={false}
        >
          <Box pad="small" background="pink">
            <Text color="white">{name}</Text>
          </Box>
        </Drop>
      )}
    </Box>
  );
}
