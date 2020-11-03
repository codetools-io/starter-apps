import React from 'react';
import { Box, Button } from 'grommet';

export default function ContactsHeader({
  cancelEdit,
  contactId,
  contactUpdates,
  editContact,
  isEditMode,
  saveChanges,
}) {
  return (
    <Box
      className="ContactsHeader"
      gridArea="ContactsHeader"
      pad="medium"
      direction="row"
      justify="end"
      align="center"
      border="bottom"
    >
      {isEditMode ? (
        <Box direction="row" gap="small">
          <Button label="Cancel" onClick={cancelEdit} />
          <Button
            label="Save"
            primary
            onClick={() => saveChanges({ ...contactUpdates })}
          />
        </Box>
      ) : (
        <Button label="Edit" primary onClick={() => editContact(contactId)} />
      )}
    </Box>
  );
}
