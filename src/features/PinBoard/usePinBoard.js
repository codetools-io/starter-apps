import { useMemo, useState } from 'react';
import { v4 as uuid } from 'uuid';
import * as config from './config';

export default function usePinBoard() {
  const [notes, setNotes] = useState(config?.notes);
  const [board, setBoard] = useState(config?.board);

  return useMemo(() => {
    function moveNote({ id, x, y }) {
      setNotes(
        notes?.map((note) => {
          if (note?.id !== id) {
            return note;
          }

          return {
            ...note,
            x: note?.x + x,
            y: note?.y + y,
          };
        })
      );
    }

    function addNote(props = {}) {
      const {
        title = 'New Note',
        x = 0,
        y = 0,
        width = 225,
        height = 300,
      } = props;
      setNotes([
        ...notes,
        {
          id: uuid(),
          x: x - width / 2,
          y: y - height / 2,
          title,
          width,
          height,
        },
      ]);
    }

    function removeNotes(ids = []) {
      setNotes(notes?.filter((note) => !ids?.includes(note?.id)));
    }

    function updateNote(update) {
      setNotes(
        notes?.map((note) => {
          if (note?.id !== update?.id) {
            return note;
          }
          return {
            ...note,
            ...update,
          };
        })
      );
    }

    return { addNote, board, updateNote, moveNote, notes, removeNotes };
  }, [board, notes]);
}
