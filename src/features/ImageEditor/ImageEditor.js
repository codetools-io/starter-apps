import React from 'react';
import { Box, Grid, Heading } from 'grommet';
import useImageEditor from './useImageEditor';

function ImageEditorHeader({ children, ...props }) {
  return <Box {...props}>{children}</Box>;
}

function ImageEditorFooter({ children, ...props }) {
  return <Box {...props}>{children}</Box>;
}

function ImageEditorCanvas({ children, ...props }) {
  return (
    <Box
      height={{ maxHeight: '100%' }}
      overflow="auto"
      border={{ size: 'large', color: 'blue' }}
      fill
      {...props}
    >
      {children}
    </Box>
  );
}

function ImageEditorMain({ layers, ...props }) {
  return (
    <Box {...props}>
      <ImageEditorHeader gridArea="header">header</ImageEditorHeader>
      <ImageEditorCanvas gridArea="canvas">
        {layers?.map((layer) => {
          return <ImageEditorLayer key={layer?.id} {...layer} />;
        })}
      </ImageEditorCanvas>
      <ImageEditorFooter gridArea="footer">footer</ImageEditorFooter>
    </Box>
  );
}

function ImageEditorSidebar({ layers, ...props }) {
  return (
    <Box {...props}>
      <Heading level={3}>Sidebar</Heading>
    </Box>
  );
}

function ImageEditorLayer({ name, type, settings = {} }) {
  switch (type) {
    case 'image':
      return (
        <Box border={{ size: 'large', color: 'red' }}>
          <img alt={name} {...settings} />
        </Box>
      );

    default:
      return <Box>{name}</Box>;
  }
}
export default function ImageEditor({ ...props }) {
  const { layers } = useImageEditor();

  return (
    <Box
      className="ImageEditor"
      direction="row"
      overflow="hidden"
      border={{ size: 'large', color: 'orange' }}
      fill
      {...props}
    >
      <ImageEditorMain layers={layers} flex />

      <ImageEditorSidebar layers={layers} width="medium" />
    </Box>
  );
}
