import React, { useContext, useMemo } from 'react';
import { Box, Heading, Image, ResponsiveContext } from 'grommet';

export default function AppShellLogo({
  background = 'brand-3',
  text,
  logo,
  logoSmall,
  ...props
}) {
  const showText = !logo && text;
  const size = useContext(ResponsiveContext);
  const style = useMemo(() => {
    if (size === 'small') {
      return { maxHeight: '32px', maxWidth: '100%' };
    }
    return { maxHeight: '100%', maxWidth: '100%' };
  }, [size]);
  return (
    <Box
      className="AppShellLogo"
      background={background}
      gridArea="logo"
      pad="medium"
      justify="center"
      fill
      {...props}
    >
      {showText ? (
        <Heading level="3" textAlign="center" color="white">
          {text}
        </Heading>
      ) : (
        <Image
          src={size === 'small' ? logoSmall : logo}
          fit="contain"
          style={style}
        />
      )}
    </Box>
  );
}
