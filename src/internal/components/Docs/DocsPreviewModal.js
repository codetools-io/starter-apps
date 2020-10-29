import React from 'react';
import { Box, Button, Layer, ThemeContext } from 'grommet';
import { Close } from 'grommet-icons';
import Theme from 'internal/components/Theme';
import DocsCard from './DocsCard';
export default function DocsPreviewModal({
  children,
  onShrink = () => {},
  themeName,
  theme,
  ...props
}) {
  return (
    <ThemeContext.Extend
      value={{
        layer: {
          background: 'transparent',
        },
      }}
    >
      <Layer
        className="DocsPreviewModal"
        onEsc={onShrink}
        onClickOutside={onShrink}
        margin={{
          horizontal: 'large',
          vertical: 'medium',
        }}
        full
        modal
      >
        <Box
          direction="row"
          justify="end"
          flex={false}
          background="transparent"
        >
          <Button icon={<Close color="white" />} onClick={() => onShrink()} />
        </Box>
        <Box height="100%" pad={{ top: 'medium' }}>
          <DocsCard height="large" flex={false} {...props}>
            <Box overflow="auto" fill>
              <Theme name={themeName} theme={theme}>
                {children}
              </Theme>
            </Box>
          </DocsCard>
        </Box>
      </Layer>
    </ThemeContext.Extend>
  );
}
