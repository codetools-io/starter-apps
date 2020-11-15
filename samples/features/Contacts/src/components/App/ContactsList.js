import React from 'react';
import { Box, Button, Text } from 'grommet';

export default function ContactsList({ contacts, contactId, openContact }) {
  return (
    <Box className="ContactList" gap="medium">
      {contacts.map((contact) => {
        return (
          <Button
            key={`contact-${contact.id}`}
            onClick={() => openContact(contact.id)}
            plain
          >
            <Box
              background={contactId === contact.id ? 'light-1' : null}
              pad={{ vertical: 'small', horizontal: 'medium' }}
            >
              <Text>
                {contact.firstName} {contact.lastName}
              </Text>

              <Text size="small" color="dark-6">
                {contact.company}
              </Text>
            </Box>
          </Button>
        );
      })}
    </Box>
  );
}
