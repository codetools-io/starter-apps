import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Box, Button, Card, CardBody, Heading, Paragraph } from 'grommet';
import { Trash } from 'grommet-icons';

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
  const { addNote, board, moveNote, notes, removeNotes } = usePinBoard();
  const targetRef = useRef({});
  const [coordinates, setCoordinates] = useState(defaultCoordinates);
  const [selectedIds, setSelectedIds] = useState([]);

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

  function onSelect(e, id) {
    e.preventDefault();
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds?.filter((selectedId) => selectedId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  }

  function onClickBoard(e) {
    e.preventDefault();
    setSelectedIds([]);
  }

  function onDoubleClickBoard(e) {
    e.preventDefault();
    const rect = e.target.getBoundingClientRect();
    addNote({ x: e.clientX - rect.left, y: e.clientY - rect.top });
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
        direction="row"
        justify="between"
        align="center"
        flex={false}
        height="xsmall"
        pad="medium"
      >
        <Box></Box>
        <Box direction="row" align="center">
          {selectedIds?.length > 0 ? (
            <Button
              icon={<Trash />}
              onClick={() => removeNotes(selectedIds)}
              plain
            />
          ) : null}
        </Box>
      </Box>
      <Box pad={{ horizontal: 'medium', bottom: 'medium' }} fill>
        <Box
          ref={targetRef}
          onDrop={onDrop}
          onDragOver={onDragOver}
          style={{ position: 'relative' }}
          flex={false}
          overflow="auto"
          onDoubleClick={onDoubleClickBoard}
          border
          fill
        >
          {notes?.map((note) => {
            const isSelected = selectedIds.includes(note?.id);

            return (
              <Card
                key={note?.id}
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
                onClick={(e) => onSelect(e, note?.id)}
                pad="small"
                draggable
              >
                <Paragraph margin="none">{note?.title}</Paragraph>
              </Card>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
