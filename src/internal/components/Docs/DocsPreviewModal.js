import React from 'react';
import { Box, Button, Layer, ThemeContext } from 'grommet';
import { Close } from 'grommet-icons';
import DocsCard from './DocsCard';
import DocsTheme from './DocsTheme';
export default function DocsPreviewModal({
  children,
  onShrink = () => {},
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
              <DocsTheme name={theme}>{children}</DocsTheme>
            </Box>
          </DocsCard>
        </Box>
      </Layer>
    </ThemeContext.Extend>
  );
}
