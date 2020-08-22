import React, { useMemo, useState } from 'react';
import {
  Box,
  Button,
  Form,
  Heading,
  Markdown,
  Text,
  TextInput,
  TextArea,
} from 'grommet';
import AppLayout from 'components/AppLayout';
import useNotes from './useNotes';

function NoteList({ notes, currentNoteId, openNote }) {
  return (
    <Box>
      {notes.map((note) => {
        return (
          <Box
            key={note.id}
            background={currentNoteId === note.id ? 'light-1' : null}
            pad={{ vertical: 'small', horizontal: 'medium' }}
            onClick={() => openNote(note.id)}
          >
            <Text>{note.title}</Text>

            <Text size="small" color="dark-6">
              {note.category}
            </Text>
          </Box>
        );
      })}
    </Box>
  );
}

function Note({
  id,
  authorId,
  title,
  body,
  category,
  editNote,
  currentNoteId,
}) {
  if (!id) {
    return null;
  }

  return (
    <Box>
      <Box gap="small">
        <Heading level={4} margin="none">
          {title}
        </Heading>
        <Text size="small">{category}</Text>
        <Markdown>{body}</Markdown>
      </Box>
    </Box>
  );
}

function NoteForm({
  id,
  authorId,
  title,
  body,
  category,
  cancelEditNote,
  saveNote,
}) {
  const initialFields = { id, authorId, title, body, category };
  const [fields, setFields] = useState(initialFields);
  const hasChanges = useMemo(() => {
    return Object.entries(fields).some(([field, value]) => {
      return value !== initialFields[field];
    });
  }, [fields, initialFields]);
  return (
    <Form
      value={fields}
      onChange={(updates) => {
        setFields(updates);
      }}
    >
      <Box gap="medium">
        <Box>
          <TextInput label="title" name="title" placeholder="Enter title" />
        </Box>

        <Box>
          <TextInput
            label="category"
            name="category"
            placeholder="Enter category"
          />
        </Box>

        <Box height="medium">
          <TextArea
            placeholder="Enter note…"
            label="body"
            name="body"
            resize={false}
            fill
          />
        </Box>

        <Box direction="row" justify="end" align="center" gap="small">
          <Button label="Cancel" onClick={() => cancelEditNote(id)} />
          <Button
            label="Save"
            onClick={() => saveNote(fields)}
            disabled={!hasChanges}
            primary
          />
        </Box>
      </Box>
    </Form>
  );
}
export default function Notes({ children, ...props }) {
  const {
    notes,
    isEditMode,
    currentNote,
    currentNoteId,
    openNote,
    cancelEditNote,
    editNote,
    addNote,
    saveNote,
  } = useNotes();

  return (
    <Box pad="medium" fill>
      <AppLayout>
        <Box
          gridArea="sidebar-header"
          pad="medium"
          border={[{ side: 'right' }, { side: 'bottom' }]}
        >
          <TextInput placeholder="Search notes" />
        </Box>

        <Box
          gridArea="header"
          pad="medium"
          direction="row"
          justify="end"
          align="center"
        >
          {currentNoteId && !isEditMode ? (
            <Button
              label="Edit"
              onClick={() => editNote(currentNoteId)}
              primary
            />
          ) : null}
        </Box>

        <Box gridArea="sidebar" pad="none" border={[{ side: 'right' }]}>
          <NoteList
            notes={notes}
            currentNoteId={currentNoteId}
            openNote={openNote}
          />
        </Box>
        <Box
          gridArea="sidebar-footer"
          pad="medium"
          border={[{ side: 'right' }, { side: 'top' }]}
        >
          <Button label="New" onClick={() => addNote(currentNoteId)} primary />
        </Box>
        <Box gridArea="main" pad="medium">
          {isEditMode ? (
            <NoteForm
              {...currentNote}
              saveNote={saveNote}
              cancelEditNote={cancelEditNote}
            />
          ) : (
            <Note
              {...currentNote}
              editNote={editNote}
              currentNoteId={currentNoteId}
            />
          )}
        </Box>
      </AppLayout>
    </Box>
  );
}
