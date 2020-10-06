import React from 'react';
import { Box, Button, Layer, ThemeContext } from 'grommet';
import { Close } from 'grommet-icons';
import DocsPreview from './DocsPreview';
export default function DocsPreviewModal({ children, onShrink = () => {} }) {
  return (
    <ThemeContext.Extend
      value={{
        layer: {
          background: 'transparent',
        },
      }}
    >
      <Layer
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
          <DocsPreview onShrink={onShrink} fill>
            {children}
          </DocsPreview>
        </Box>
      </Layer>
    </ThemeContext.Extend>
  );
}
