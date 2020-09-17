import { useMemo, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { notes as data } from 'data';
export default function useNotes() {
  const [notes, setNotes] = useState(data?.notes);
  const [noteSearch, setNoteSearch] = useState();
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentNoteId, setCurrentNoteId] = useState();
  const currentNote = useMemo(() => {
    return notes.find((note) => note.id === currentNoteId);
  }, [notes, currentNoteId]);
  const noteSearchResults = useMemo(() => {
    const queryValue = noteSearch?.trim?.()?.toLowerCase?.();
    const searchableFields = ['title', 'body', 'category'];

    if (!queryValue) {
      return [];
    }

    return notes
      ?.filter((note) => {
        return searchableFields.some((searchableField) => {
          return note?.[searchableField]
            ?.toLowerCase?.()
            ?.includes?.(queryValue);
        });
      })
      .map((result) => {
        return {
          label: `${result?.title}`,
          value: result?.id,
        };
      });
  }, [notes, noteSearch]);
  return useMemo(() => {
    function openNote(id) {
      setCurrentNoteId(id);
      setIsEditMode(false);
    }

    function editNote(id) {
      setCurrentNoteId(id);
      setIsEditMode(true);
    }

    function cancelEditNote(id) {
      setCurrentNoteId(id);
      setIsEditMode(false);
    }

    function closeNote(id) {
      setCurrentNoteId(null);
      setIsEditMode(false);
    }

    function addNote() {
      const id = uuid();
      setNotes([
        ...notes,
        {
          id,
          authorId: 'user-1',
          title: 'Untitled Note',
          body: '',
          category: 'General',
        },
      ]);
      editNote(id);
    }

    function saveNote(note) {
      setNotes(
        notes.map((n) => {
          if (n.id !== note.id) {
            return n;
          }

          return note;
        })
      );
      setIsEditMode(false);
    }
    function searchNotes(value) {
      setNoteSearch(value);
    }
    function clearNoteSearch() {
      setNoteSearch('');
    }
    return {
      notes: notes,
      currentNote,
      currentNoteId,
      isEditMode,
      openNote,
      editNote,
      cancelEditNote,
      closeNote,
      addNote,
      saveNote,
      noteSearch,
      searchNotes,
      clearNoteSearch,
      noteSearchResults,
    };
  }, [
    notes,
    currentNote,
    currentNoteId,
    isEditMode,
    noteSearch,
    noteSearchResults,
  ]);
}
