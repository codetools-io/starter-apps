import React from 'react';
import { Box, Button, Card, Paragraph, Stack, TextInput } from 'grommet';
import { Edit } from 'grommet-icons';
export default function PinBoardNote({
  isEditable,
  isHovered,
  isSelected,
  note,
  onDrag,
  onDragEnd,
  onDragStart,
  onEditNote,
  onSelectNote,
  setHoveredNote,
  updateNote,
}) {
  return (
    <Card
      className="PinBoardNote"
      onDragStart={(e) => onDragStart(e, note)}
      onDrag={onDrag}
      onDragEnd={onDragEnd}
      style={{
        position: 'absolute',
        left: `${note?.x}px`,
        top: `${note?.y}px`,
        height: `${note?.height}px`,
        width: `${note?.width}px`,
        transition: `box-shadow 0.5s ease-in-out`,
        outline: 'transparent',
      }}
      background="background-front"
      elevation="none"
      border={{
        side: 'all',
        color: isSelected ? 'brand' : 'light-3',
        size: isSelected ? 'medium' : 'xsmall',
      }}
      onClick={(e) => onSelectNote(e, note?.id)}
      pad="small"
      draggable
    >
      {isEditable ? (
        <TextInput
          value={note?.title}
          onChange={(e) => {
            updateNote({
              id: note?.id,
              title: e?.target?.value,
            });
          }}
        />
      ) : (
        <Box
          onMouseEnter={() => setHoveredNote(note?.id)}
          onMouseLeave={() => setHoveredNote(null)}
          fill
        >
          <Stack direction="row" anchor="top-right">
            <Box>
              <Paragraph margin="none">{note?.title}</Paragraph>
            </Box>

            {isHovered && (
              <Button
                icon={<Edit size="small" color="dark-6" />}
                onClick={(e) => onEditNote(e, note?.id)}
                plain
              />
            )}
          </Stack>
        </Box>
      )}
    </Card>
  );
}
