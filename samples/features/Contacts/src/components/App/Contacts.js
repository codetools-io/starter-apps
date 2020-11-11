import React from 'react';
import { Grid } from 'grommet';

import ContactsHeader from './ContactsHeader';
import ContactsMain from './ContactsMain';
import ContactsSearch from './ContactsSearch';
import ContactsSidebar from './ContactsSidebar';

import useContacts from './useContacts';

export default function Contacts({ children, ...props }) {
  const {
    contacts,
    contact,
    contactId,
    updateContact,
    openContact,
    editContact,
    cancelEdit,
    saveChanges,
    isEditMode,
    contactUpdates,
    searchContacts,
    clearContactSearch,
    contactSearchResults,
    contactSearch,
  } = useContacts();

  return (
    <Grid
      className="Contacts"
      columns={['1/4', '1/4', '1/4', '1/4']}
      rows={['auto', 'flex', 'auto']}
      areas={[
        [
          'ContactsSearch',
          'ContactsHeader',
          'ContactsHeader',
          'ContactsHeader',
        ],
        ['ContactsSidebar', 'ContactsMain', 'ContactsMain', 'ContactsMain'],
        ['ContactsSidebar', 'ContactsMain', 'ContactsMain', 'ContactsMain'],
      ]}
      fill
    >
      <ContactsSearch
        contactSearch={contactSearch}
        contactSearchResults={contactSearchResults}
        clearContactSearch={clearContactSearch}
        openContact={openContact}
        searchContacts={searchContacts}
      />
      <ContactsHeader
        cancelEdit={cancelEdit}
        contactId={contactId}
        contactUpdates={contactUpdates}
        editContact={editContact}
        isEditMode={isEditMode}
        saveChanges={saveChanges}
      />
      <ContactsSidebar
        contactId={contactId}
        contacts={contacts}
        openContact={openContact}
      />
      <ContactsMain
        contact={contact}
        contactUpdates={contactUpdates}
        isEditMode={isEditMode}
        updateContact={updateContact}
      />
    </Grid>
  );
}
