import React from 'react';
import { Box } from 'grommet';

import ContactsList from './ContactsList';

export default function ContactsSidebar({ contactId, contacts, openContact }) {
  return (
    <Box
      className="ContactsSidebar"
      gridArea="ContactsSidebar"
      pad="none"
      border={[{ side: 'right' }]}
    >
      <ContactsList
        contacts={contacts}
        contactId={contactId}
        openContact={openContact}
      />
    </Box>
  );
}
