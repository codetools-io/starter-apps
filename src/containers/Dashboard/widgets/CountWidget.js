import React from 'react';
import { Box, Card, Text } from 'grommet';
import useContrast from 'hooks/useContrast';
import useDarken from 'hooks/useDarken';

function Icon({ icon, color }) {
  const Component = icon;
  return (
    <Box>
      <Component color={color} />
    </Box>
  );
}
export default function CountWidget({
  id,
  label,
  value,
  icon,
  color,
  ...props
}) {
  const contrast = useContrast(color);
  const offsetColor = useDarken(color, 20);

  return (
    <Card direction="row" background={color} {...props}>
      {icon && (
        <Box justify="center" background={offsetColor} pad="medium">
          <Icon icon={icon} color={contrast} />
        </Box>
      )}
      <Box gap="xsmall" pad="medium">
        <Text margin="none" color={contrast} size="xlarge" weight="bold">
          {value}
        </Text>
        {label && (
          <Text margin="none" color={contrast}>
            {label}
          </Text>
        )}
      </Box>
    </Card>
  );
}
