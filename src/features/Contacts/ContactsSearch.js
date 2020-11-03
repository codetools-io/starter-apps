import React from 'react';
import { Box, TextInput } from 'grommet';

export default function ContactsSearch({
  contactSearch,
  contactSearchResults,
  clearContactSearch,
  openContact,
  searchContacts,
}) {
  return (
    <Box
      className="ContactsSearch"
      gridArea="ContactsSearch"
      pad="medium"
      border={[{ side: 'right' }, { side: 'bottom' }]}
    >
      <TextInput
        onChange={(e) => searchContacts(e.target.value)}
        onSelect={(e) => {
          openContact(e.suggestion.value);
          clearContactSearch();
        }}
        placeholder="Search contacts"
        suggestions={contactSearchResults}
        value={contactSearch}
        plain
      />
    </Box>
  );
}
