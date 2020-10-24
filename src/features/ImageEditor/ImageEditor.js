import React, { useRef } from 'react';
import { Box, Grid, Heading, Paragraph } from 'grommet';
import useImageEditor from './useImageEditor';

function ImageEditorHeader({ name, ...props }) {
  return (
    <Box className="ImageEditorHeader" {...props}>
      <Paragraph margin="none">{name}</Paragraph>
    </Box>
  );
}

function ImageEditorFooter({ children, ...props }) {
  return (
    <Box className="ImageEditorFooter" {...props}>
      {children}
    </Box>
  );
}

function ImageEditorCanvas({ children, ...props }) {
  return (
    <Box
      className="ImageEditorCanvas"
      overflow="auto"
      border={{ size: 'large', color: 'blue' }}
      flex
      {...props}
    >
      {children}
    </Box>
  );
}

function ImageEditorMain({ children, document, layers, ...props }) {
  return (
    <Box
      className="ImageEditorMain"
      border={{ size: 'large', color: 'purple' }}
      {...props}
    >
      <ImageEditorHeader name={document?.name} />
      <ImageEditorCanvas>{children}</ImageEditorCanvas>
      <ImageEditorFooter>footer</ImageEditorFooter>
    </Box>
  );
}

function ImageEditorSidebar({ layers, ...props }) {
  return (
    <Box className="ImageEditorSidebar" {...props}>
      <Heading level={3}>Sidebar</Heading>
    </Box>
  );
}

export default function ImageEditor({ ...props }) {
  const { canvasEl, document, layers } = useImageEditor();

  return (
    <Box
      className="ImageEditor"
      direction="row"
      overflow="hidden"
      border={{ size: 'large', color: 'orange' }}
      {...props}
    >
      <ImageEditorMain document={document} layers={layers} flex>
        <canvas ref={canvasEl} width="100%" height="100%">
          Could not load canvas
        </canvas>
      </ImageEditorMain>

      <ImageEditorSidebar document={document} layers={layers} width="medium" />
    </Box>
  );
}
