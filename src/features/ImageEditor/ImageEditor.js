import React, { useRef, useState } from 'react';
import {
  Box,
  Button,
  DropButton,
  Heading,
  Paragraph,
  RangeInput,
  TextInput,
} from 'grommet';
import { Checkmark, Clear } from 'grommet-icons';
import useImageEditor from './useImageEditor';

function ImageEditorHeader({ name, ...props }) {
  return (
    <Box className="ImageEditorHeader" {...props}>
      <Paragraph margin="none">{name}</Paragraph>
    </Box>
  );
}

function ImageEditorFooter({
  image,
  filters = [],
  onToggleFilter,
  onApplyFilter,
  onClearFilter,
  ...props
}) {
  const footerRef = useRef();

  return (
    <Box className="ImageEditorFooter" {...props}>
      <Box ref={footerRef} border={{ size: 'large', color: 'orange' }}></Box>
      <Box direction="row" gap="small" pad="small">
        {filters?.map((filter) => {
          const isToggled = image?.filters?.some((f) => f?.key === filter?.key);

          return (
            <DropButton
              key={filter?.key}
              label={filter?.title}
              name={filter?.key}
              dropAlign={{ bottom: 'top', left: 'left' }}
              dropContent={
                <Box
                  pad="large"
                  background="light-2"
                  direction="row"
                  align="center"
                  gap="small"
                >
                  {filter?.args?.map((arg) => {
                    return (
                      <RangeInput
                        key={`${filter?.key}-${arg?.key}`}
                        value={arg?.value}
                        min={arg?.min}
                        max={arg?.max}
                      />
                    );
                  })}
                  <Button
                    icon={<Clear />}
                    onClick={() => onClearFilter()}
                    plain
                  />
                  <Button
                    icon={<Checkmark />}
                    onClick={() => onApplyFilter()}
                    plain
                  />
                </Box>
              }
              dropTarget={footerRef.current}
              onClick={(event) => onToggleFilter(filter)}
              color={isToggled ? 'brand-1' : 'brand-3'}
              primary
            />
          );
        })}
      </Box>
    </Box>
  );
}

function ImageEditorCanvas({ children, ...props }) {
  return (
    <Box className="ImageEditorCanvas" overflow="auto" flex {...props}>
      {children}
    </Box>
  );
}

function ImageEditorMain({
  children,
  filters,
  image,
  onToggleFilter,
  onClearFilter,
  onApplyFilter,
  ...props
}) {
  return (
    <Box className="ImageEditorMain" {...props}>
      <ImageEditorHeader name={image?.title} />
      <ImageEditorCanvas>{children}</ImageEditorCanvas>
      <ImageEditorFooter
        filters={filters}
        image={image}
        onToggleFilter={onToggleFilter}
      />
    </Box>
  );
}

function ImageEditorSidebar({ image, ...props }) {
  return (
    <Box className="ImageEditorSidebar" {...props}>
      <Heading level={3}>Sidebar</Heading>
    </Box>
  );
}

export default function ImageEditor({ ...props }) {
  const {
    applyFilter,
    canvasEl,
    clearFilter,
    image,
    filters,
    toggleFilter,
  } = useImageEditor();

  return (
    <Box className="ImageEditor" direction="row" overflow="hidden" {...props}>
      <ImageEditorMain
        image={image}
        filters={filters}
        onToggleFilter={toggleFilter}
        onClearFilter={clearFilter}
        onApplyFilter={applyFilter}
        flex
      >
        <canvas ref={canvasEl} width="100%" height="100%">
          Could not load canvas
        </canvas>
      </ImageEditorMain>

      <ImageEditorSidebar image={image} width="medium" />
    </Box>
  );
}
