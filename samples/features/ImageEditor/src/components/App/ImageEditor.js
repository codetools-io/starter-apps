import React, { useRef } from 'react';
import {
  Box,
  Button,
  DropButton,
  Form,
  FormField,
  Heading,
  RangeInput,
} from 'grommet';
import { Checkmark, Clear } from 'grommet-icons';
import useImageEditor from './useImageEditor';

function ImageEditorFilterMenu({
  filter,
  onUpdateFilter,
  onApplyFilter,
  onClearFilter,
}) {
  return (
    <Box className="ImageEditorFilterMenu" pad="medium" background="light-2">
      <Heading level={5} margin="none">
        {filter?.title}
      </Heading>
      <Form>
        <Box direction="row" gap="small" fill="horizontal">
          {Object.entries(filter?.args)?.map(([key, arg]) => {
            return (
              <Box key={`filter-${filter?.key}-arg-${key}`} flex>
                <FormField label={key}>
                  <RangeInput
                    name={key}
                    min={arg?.min}
                    max={arg?.max}
                    value={arg?.value}
                    onChange={(event) => {
                      onUpdateFilter(filter?.key, {
                        args: {
                          ...filter?.args,
                          [key]: {
                            ...arg,
                            value: parseInt(event?.target?.value, 10),
                          },
                        },
                      });
                    }}
                  />
                </FormField>
              </Box>
            );
          })}

          <Button
            icon={<Clear color="status-critical" />}
            onClick={() => onClearFilter(filter?.key)}
            plain
          />
          <Button
            icon={<Checkmark color="status-ok" />}
            onClick={() => onApplyFilter(filter?.key)}
            plain
          />
        </Box>
      </Form>
    </Box>
  );
}

function ImageEditorFooter({
  image,
  filters = {},
  toggledSettings,
  onUpdateFilter,
  onClearFilter,
  onApplyFilter,
  onToggleSettings,
  ...props
}) {
  const footerRef = useRef();

  return (
    <Box className="ImageEditorFooter" {...props}>
      <Box ref={footerRef}></Box>
      <Box pad="medium">
        <Box overflow={{ horizontal: 'auto' }} align="center" fill="horizontal">
          <Box direction="row-responsive" gap="small">
            {Object.entries(filters)?.map(([key, filter]) => {
              return (
                <DropButton
                  key={`filter-${key}`}
                  label={filter?.title}
                  name={key}
                  dropAlign={{ bottom: 'top', left: 'left' }}
                  dropContent={
                    <ImageEditorFilterMenu
                      filter={filter}
                      onUpdateFilter={onUpdateFilter}
                      onApplyFilter={() => {
                        onApplyFilter(key);
                        onToggleSettings(null);
                      }}
                      onClearFilter={() => {
                        onClearFilter(key);
                        onToggleSettings(null);
                      }}
                    />
                  }
                  dropTarget={footerRef.current}
                  color={filter?.applied ? 'brand' : 'shade-7'}
                  onOpen={() => {
                    onApplyFilter(key);
                  }}
                  onClick={() => {
                    onToggleSettings(key);
                  }}
                  open={toggledSettings === key}
                  primary
                />
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function ImageEditorCanvas({ children, ...props }) {
  return (
    <Box
      className="ImageEditorCanvas"
      direction="row"
      align="center"
      justify="center"
      pad="medium"
      height="large"
      flex
      border
      {...props}
    >
      <Box align="center" justify="center" fill>
        {children}
      </Box>
    </Box>
  );
}

function ImageEditorMain({
  children,
  filters,
  image,
  onUpdateFilter,
  onApplyFilter,
  onClearFilter,
  toggledSettings,
  onToggleSettings,
  ...props
}) {
  return (
    <Box className="ImageEditorMain" {...props}>
      <ImageEditorCanvas>{children}</ImageEditorCanvas>
      <ImageEditorFooter
        filters={filters}
        image={image}
        onUpdateFilter={onUpdateFilter}
        onApplyFilter={onApplyFilter}
        onClearFilter={onClearFilter}
        toggledSettings={toggledSettings}
        onToggleSettings={onToggleSettings}
      />
    </Box>
  );
}

export default function ImageEditor({ ...props }) {
  const {
    filters,
    canvasEl,
    image,
    updateFilter,
    applyFilter,
    clearFilter,
    toggledSettings,
    toggleSettings,
  } = useImageEditor();

  return (
    <Box className="ImageEditor" {...props}>
      <ImageEditorMain
        image={image}
        filters={filters}
        onUpdateFilter={updateFilter}
        onClearFilter={clearFilter}
        onApplyFilter={applyFilter}
        toggledSettings={toggledSettings}
        onToggleSettings={toggleSettings}
      >
        <canvas
          ref={canvasEl}
          style={{
            minWidth: image?.width,
            maxWidth: image?.width,
            minHeight: image?.height,
            maxHeight: image?.height,
          }}
        >
          Could not load canvas
        </canvas>
      </ImageEditorMain>
    </Box>
  );
}
