import React, { useRef, useState } from 'react';
import {
  Box,
  Button,
  DropButton,
  Form,
  FormField,
  Heading,
  Paragraph,
  RangeInput,
  TextInput,
} from 'grommet';
import { Checkmark, Clear } from 'grommet-icons';
import useImageEditor from './useImageEditor';

function ImageEditorFilterMenu({
  image,
  filter,
  onUpdateFilterArg,
  onApplyFilter,
  onClearFilter,
}) {
  return (
    <Box pad="medium" background="light-2">
      <Heading level={5} margin="none">
        {filter?.title}
      </Heading>
      <Form onChange={(value) => {}}>
        <Box direction="row" gap="small" fill="horizontal">
          {filter?.args?.map((arg) => {
            return (
              <Box key={`${filter?.key}-${arg?.key}`} flex>
                <FormField label={arg?.key}>
                  <RangeInput
                    name={arg?.key}
                    value={arg?.value}
                    min={arg?.min}
                    max={arg?.max}
                    onChange={(event) => {
                      onUpdateFilterArg({
                        filterKey: filter?.key,
                        argKey: arg?.key,
                        value: event?.target?.value,
                      });
                    }}
                  />
                </FormField>
              </Box>
            );
          })}

          <Button
            icon={<Clear color="status-critical" />}
            onClick={() => onClearFilter(filter)}
            plain
          />
          <Button
            icon={<Checkmark color="status-ok" />}
            onClick={() => onApplyFilter(filter)}
            plain
          />
        </Box>
      </Form>
    </Box>
  );
}
function ImageEditorFooter({
  image,
  filters = [],
  onUpdateFilterArg,
  ...props
}) {
  const footerRef = useRef();
  const [activeMenu, setActiveMenu] = useState();
  function onApplyFilter() {
    setActiveMenu(null);
  }
  function onClearFilter() {
    setActiveMenu(null);
  }

  return (
    <Box className="ImageEditorFooter" {...props}>
      <Box ref={footerRef}></Box>
      <Box direction="row" gap="small" pad="small">
        {filters?.map((filter) => {
          const isApplied = image?.filters?.some((f) => f?.key === filter?.key);

          return (
            <DropButton
              key={filter?.key}
              label={filter?.title}
              name={filter?.key}
              dropAlign={{ bottom: 'top', left: 'left' }}
              dropContent={
                <ImageEditorFilterMenu
                  image={image}
                  filter={
                    isApplied
                      ? image?.filters?.find((f) => f?.key === filter?.key)
                      : filter
                  }
                  onUpdateFilterArg={onUpdateFilterArg}
                  onApplyFilter={onApplyFilter}
                  onClearFilter={onClearFilter}
                />
              }
              dropTarget={footerRef.current}
              color={isApplied ? 'brand-1' : 'brand-3'}
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
  onUpdateFilterArg,
  onRemoveFilter,
  ...props
}) {
  return (
    <Box className="ImageEditorMain" {...props}>
      <ImageEditorCanvas>{children}</ImageEditorCanvas>
      <ImageEditorFooter
        filters={filters}
        image={image}
        onUpdateFilterArg={onUpdateFilterArg}
        onRemoveFilter={onRemoveFilter}
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
    canvasEl,
    image,
    filters,
    updateFilterArg,
    removeFilter,
  } = useImageEditor();

  return (
    <Box className="ImageEditor" direction="row" overflow="hidden" {...props}>
      <ImageEditorMain
        image={image}
        filters={filters}
        onUpdateFilterArg={updateFilterArg}
        onRemoveFilter={removeFilter}
        flex
      >
        <canvas ref={canvasEl} width="100%" height="100%">
          Could not load canvas
        </canvas>
      </ImageEditorMain>
    </Box>
  );
}
