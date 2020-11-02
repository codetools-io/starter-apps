import React from 'react';
import { Box, Button } from 'grommet';
import { Trash } from 'grommet-icons';

export default function PinBoardToolbar({
  onRemoveNotes = () => {},
  selectedIds,
}) {
  return (
    <Box
      className="PinBoardToolbar"
      direction="row"
      justify="between"
      align="center"
      flex={false}
      height="xsmall"
      pad="medium"
    >
      <Box></Box>
      <Box direction="row" align="center" gap="medium">
        {selectedIds?.length > 0 ? (
          <Button icon={<Trash />} onClick={onRemoveNotes} plain />
        ) : null}
      </Box>
    </Box>
  );
}
