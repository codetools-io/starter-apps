import { useCallback, useMemo, useState } from 'react';
import { v4 as uuid } from 'uuid';

export default function useNotes() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [_notes, setNotes] = useState([
    {
      id: 'note-1',
      authorId: 'user-1',
      title: 'Example Note',
      body: 'Content for the note',
      category: 'General',
    },
    {
      id: 'note-2',
      authorId: 'user-1',
      title: 'Another Example Note',
      body: 'Content for the note',
      category: 'Work',
    },
  ]);
  const [currentNoteId, setCurrentNoteId] = useState();
  const currentNote = useMemo(() => {
    return _notes.find((note) => note.id === currentNoteId);
  }, [_notes, currentNoteId]);

  const openNote = useCallback((id) => {
    setCurrentNoteId(id);
    setIsEditMode(false);
  }, []);

  const editNote = useCallback((id) => {
    setCurrentNoteId(id);
    setIsEditMode(true);
  }, []);

  const cancelEditNote = useCallback((id) => {
    setCurrentNoteId(id);
    setIsEditMode(false);
  }, []);

  const closeNote = useCallback((id) => {
    setCurrentNoteId(null);
    setIsEditMode(false);
  }, []);

  const addNote = useCallback(() => {
    const id = uuid();
    setNotes([
      ..._notes,
      {
        id,
        authorId: 'user-1',
        title: 'Untitled Note',
        body: '',
        category: 'General',
      },
    ]);
    editNote(id);
    // eslint-disable-next-line
  }, [_notes]);

  const saveNote = useCallback(
    (note) => {
      setNotes(
        _notes.map((n) => {
          if (n.id !== note.id) {
            return n;
          }

          return note;
        })
      );
      setIsEditMode(false);
    },
    [_notes]
  );

  const notes = useMemo(() => {
    return {
      notes: _notes,
      currentNote,
      currentNoteId,
      isEditMode,
      openNote,
      editNote,
      cancelEditNote,
      closeNote,
      addNote,
      saveNote,
    };
  }, [
    _notes,
    currentNote,
    currentNoteId,
    isEditMode,
    openNote,
    editNote,
    cancelEditNote,
    closeNote,
    addNote,
    saveNote,
  ]);

  return notes;
}
