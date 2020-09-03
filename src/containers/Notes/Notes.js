import React, { useMemo, useState } from 'react';
import {
  Box,
  Card,
  Button,
  Form,
  Grid,
  Heading,
  Markdown,
  Text,
  TextInput,
  TextArea,
} from 'grommet';

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
    <Box className="Notes" pad="medium" fill>
      <Card background="white" fill>
        <Grid
          columns={['1/4', '1/4', '1/4', '1/4']}
          rows={['auto', 'flex', 'auto']}
          areas={[
            ['NotesSearch', 'NotesHeader', 'NotesHeader', 'NotesHeader'],
            ['NotesSidebar', 'NotesMain', 'NotesMain', 'NotesMain'],
            ['NotesNew', 'NotesMain', 'NotesMain', 'NotesMain'],
          ]}
          fill
        >
          <Box
            gridArea="NotesSearch"
            pad="medium"
            border={[{ side: 'right' }, { side: 'bottom' }]}
          >
            <TextInput placeholder="Search notes" />
          </Box>

          <Box
            gridArea="NotesHeader"
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

          <Box gridArea="NotesSidebar" pad="none" border={[{ side: 'right' }]}>
            <NoteList
              notes={notes}
              currentNoteId={currentNoteId}
              openNote={openNote}
            />
          </Box>
          <Box
            gridArea="NotesNew"
            pad="medium"
            border={[{ side: 'right' }, { side: 'top' }]}
          >
            <Button
              label="New"
              onClick={() => addNote(currentNoteId)}
              primary
            />
          </Box>
          <Box gridArea="NotesMain" pad="medium">
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
        </Grid>
      </Card>
    </Box>
  );
}
