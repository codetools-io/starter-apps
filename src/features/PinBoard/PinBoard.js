import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Box, Card, Heading } from 'grommet';
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
  const { board, moveNote, notes } = usePinBoard();
  const targetRef = useRef({});
  const [coordinates, setCoordinates] = useState(defaultCoordinates);

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
    <div className="PinBoard" {...props}>
      <Box
        ref={targetRef}
        onDrop={onDrop}
        onDragOver={onDragOver}
        pad="none"
        style={{ position: 'relative' }}
        flex={false}
        height="large"
        width="xxlarge"
        border={{ color: 'light-6', size: 'large' }}
        overflow="auto"
      >
        {notes?.map((note) => {
          return (
            <Card
              key={note?.id}
              pad="small"
              onDragStart={(e) => onDragStart(e, note)}
              onDrag={onDrag}
              onDragEnd={onDragEnd}
              style={{
                position: 'absolute',
                left: `${note?.x}px`,
                top: `${note?.y}px`,
                height: `${note?.height}px`,
                width: `${note?.width}px`,
              }}
              draggable
            >
              <Heading margin="none">{note?.title}</Heading>
            </Card>
          );
        })}
      </Box>
    </div>
  );
}
