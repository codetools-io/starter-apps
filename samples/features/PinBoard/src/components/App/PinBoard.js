import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Box, Button, Card, Paragraph, Stack, TextInput } from 'grommet';
import { Edit, Trash } from 'grommet-icons';

import usePinBoard from './usePinBoard';

export default function PinBoard({ children, ...props }) {
  const defaultCoordinates = {
    initialX: null,
    initialY: null,
    completionX: null,
    completionY: null,
    movementX: null,
    movementY: null,
  };
  const {
    addNote,
    board,
    updateNote,
    moveNote,
    notes,
    removeNotes,
  } = usePinBoard();
  const targetRef = useRef({});
  const [coordinates, setCoordinates] = useState(defaultCoordinates);
  const [selectedIds, setSelectedIds] = useState([]);
  const [editModeIds, setEditModeIds] = useState([]);
  const [hoveredNote, setHoveredNote] = useState();

  const onDragStart = useCallback(
    (e, note) => {
      e.dataTransfer.dropEffect = 'move';

      setCoordinates({
        ...coordinates,
        id: note?.id,
        initialX: e?.clientX,
        initialY: e?.clientY,
      });
    },
    [coordinates]
  );
  const onDrag = useCallback((e) => {}, [coordinates]);

  const onDragEnd = useCallback(
    (e) => {
      const movementX = e?.clientX - coordinates?.initialX;
      const movementY = e?.clientY - coordinates?.initialY;

      setCoordinates({
        ...coordinates,
        completionX: e?.clientX,
        completionY: e?.clientY,
        movementX,
        movementY,
      });
    },
    [coordinates]
  );

  function onDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }

  function onDrop(e) {
    e.preventDefault();
  }

  function onSelectNote(e, id) {
    e.preventDefault();
    if (selectedIds.includes(id)) {
      if (!editModeIds.includes(id)) {
        setSelectedIds(selectedIds?.filter((selectedId) => selectedId !== id));
      }
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  }

  // toggles edit mode for a note
  function onEditNote(e, id) {
    e.preventDefault();

    if (!selectedIds.includes(id)) {
      setSelectedIds([...selectedIds, id]);
    }

    if (!editModeIds?.includes(id)) {
      setEditModeIds([...editModeIds, id]);
    }
  }

  function onEditNotes() {
    console.log('edit the notes');
  }

  function onRemoveNotes() {
    removeNotes(selectedIds);
    setSelectedIds([]);
  }

  function onDoubleClickBoard(e) {
    e.preventDefault();
    if (selectedIds?.length) {
      setSelectedIds([]);
      setEditModeIds([]);
    } else {
      const rect = e.target.getBoundingClientRect();
      addNote({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  }

  useEffect(() => {
    if (
      coordinates?.id &&
      Number.isInteger(coordinates?.movementX) &&
      Number.isInteger(coordinates?.movementY)
    ) {
      moveNote({
        id: coordinates?.id,
        x: coordinates?.movementX,
        y: coordinates?.movementY,
      });
      setCoordinates(defaultCoordinates);
    }
  }, [coordinates]);

  return (
    <Box className="PinBoard" height="large" {...props}>
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
      <Box
        className="PinBoardMain"
        pad={{ horizontal: 'medium', bottom: 'medium' }}
        fill
      >
        <Box
          className="PinBoardBoard"
          ref={targetRef}
          onDrop={onDrop}
          onDragOver={onDragOver}
          style={{ position: 'relative' }}
          flex={false}
          overflow="auto"
          onDoubleClick={(e) => onDoubleClickBoard(e)}
          round="small"
          border
          fill
        >
          {notes?.map((note) => {
            const isSelected = selectedIds.includes(note?.id);
            const isEditable = editModeIds.includes(note?.id);
            const isHovered = hoveredNote === note?.id || isSelected;
            return (
              <Card
                key={note?.id}
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
                on
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
          })}
        </Box>
      </Box>
    </Box>
  );
}
