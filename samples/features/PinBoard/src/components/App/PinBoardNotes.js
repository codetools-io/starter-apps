import React from 'react';
import { Box } from 'grommet';

import PinBoardNote from './PinBoardNote';

export default function PinBoardNotes({
  editModeIds = [],
  hoveredNote,
  notes = [],
  onDoubleClickBoard = () => {},
  onDrag = () => {},
  onDragEnd = () => {},
  onDragOver = () => {},
  onDragStart = () => {},
  onDrop = () => {},
  onEditNote = () => {},
  onSelectNote = () => {},
  selectedIds = [],
  setHoveredNote = () => {},
  target,
  updateNote = () => {},
}) {
  return (
    <Box
      className="PinBoardNotes"
      ref={target}
      onDrop={onDrop}
      onDragOver={onDragOver}
      style={{ position: 'relative' }}
      flex={false}
      overflow="auto"
      onDoubleClick={(e) => onDoubleClickBoard(e)}
      round="small"
      border="all"
      height={{ min: 'small' }}
      fill
    >
      {notes?.map?.((note) => {
        const isSelected = selectedIds.includes(note?.id);
        const isEditable = editModeIds.includes(note?.id);
        const isHovered = hoveredNote === note?.id || isSelected;
        return (
          <PinBoardNote
            key={note?.id}
            isEditable={isEditable}
            isHovered={isHovered}
            isSelected={isSelected}
            note={note}
            onDrag={onDrag}
            onDragEnd={onDragEnd}
            onDragStart={onDragStart}
            onEditNote={onEditNote}
            onSelectNote={onSelectNote}
            setHoveredNote={setHoveredNote}
            updateNote={updateNote}
          />
        );
      })}
    </Box>
  );
}
