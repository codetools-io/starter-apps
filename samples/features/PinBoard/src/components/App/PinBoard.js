import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Box } from 'grommet';

import PinBoardNotes from './PinBoardNotes';
import PinBoardToolbar from './PinBoardToolbar';
import usePinBoard from './usePinBoard';

export default function PinBoard({ children, ...props }) {
  const defaultCoordinates = useMemo(() => {
    return {
      initialX: null,
      initialY: null,
      completionX: null,
      completionY: null,
      movementX: null,
      movementY: null,
    };
  }, []);
  const { addNote, updateNote, moveNote, notes, removeNotes } = usePinBoard();
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

  const onDrag = useCallback((e) => {}, []);

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

  function onEditNote(e, id) {
    e.preventDefault();

    if (!selectedIds.includes(id)) {
      setSelectedIds([...selectedIds, id]);
    }

    if (!editModeIds?.includes(id)) {
      setEditModeIds([...editModeIds, id]);
    }
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
  }, [coordinates, defaultCoordinates, moveNote]);

  return (
    <Box className="PinBoard" height="large" {...props}>
      <PinBoardToolbar
        onRemoveNotes={onRemoveNotes}
        selectedIds={selectedIds}
      />
      <Box
        className="PinBoardMain"
        pad={{ horizontal: 'medium', bottom: 'medium' }}
        fill
      >
        <PinBoardNotes
          editModeIds={editModeIds}
          hoveredNote={hoveredNote}
          notes={notes}
          onDoubleClickBoard={onDoubleClickBoard}
          onDrag={onDrag}
          onDragEnd={onDragEnd}
          onDragOver={onDragOver}
          onDragStart={onDragStart}
          onDrop={onDrop}
          onEditNote={onEditNote}
          onSelectNote={onSelectNote}
          selectedIds={selectedIds}
          setHoveredNote={setHoveredNote}
          target={targetRef}
          updateNote={updateNote}
        />
      </Box>
    </Box>
  );
}
