import { useMemo, useState } from 'react';
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

    return { board, moveNote, notes };
  }, [board, notes]);
}
