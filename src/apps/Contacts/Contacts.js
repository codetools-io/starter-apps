import React from 'react';
import {
  Box,
  Button,
  Form,
  FormField,
  Grid,
  Heading,
  Image,
  List,
  Text,
  TextInput,
} from 'grommet';
import { DocsCard } from 'components/Docs';
import useContacts from './useContacts';

function ContactsList({ contacts, contactId, openContact }) {
  return (
    <Box gap="medium">
      {contacts.map((contact) => {
        return (
          <Button
            key={`contact-${contact.id}`}
            onClick={() => openContact(contact.id)}
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

function Contact({
  id,
  firstName,
  lastName,
  company,
  profile,
  email,
  mobile,
  home,
  work,
}) {
  return (
    <Box direction="row" gap="medium">
      <Box gap="xsmall">
        <Box>
          <Image src={profile} fit="cover" />
        </Box>
        <Heading level={4} margin="none">
          {firstName} {lastName}
        </Heading>
        <Text size="small">{company}</Text>
      </Box>
      <Box gap="small" flex>
        <List
          primaryKey="label"
          secondaryKey="value"
          border={{ size: '0px' }}
          data={[
            { label: 'First Name', value: firstName },
            { label: 'Last Name', value: lastName },
            { label: 'Company', value: company },
            { label: 'Email', value: email },
            { label: 'Mobile', value: mobile },
            { label: 'Home', value: home },
            { label: 'Work', value: work },
          ]}
        >
          {(datum, index) => (
            <Box direction="row" gap="small">
              <Box width="small">
                <Text weight="bold">{datum.label}</Text>
              </Box>
              <Box>{datum.value}</Box>
            </Box>
          )}
        </List>
      </Box>
    </Box>
  );
}

function ContactForm({ fields, update }) {
  return (
    <Form value={fields} onChange={(changes) => update(changes)}>
      <Box direction="row" gap="medium">
        <Box gap="xsmall">
          <Box>
            <Image src={fields.profile} fit="cover" />
          </Box>
        </Box>
        <Box gap="small" flex>
          <FormField
            component={TextInput}
            label="First Name"
            name="firstName"
          />
          <FormField component={TextInput} label="Last Name" name="lastName" />
          <FormField component={TextInput} label="Company" name="company" />
          <FormField component={TextInput} label="Email" name="email" />
          <FormField component={TextInput} label="Mobile" name="mobile" />
          <FormField component={TextInput} label="Home" name="home" />
          <FormField component={TextInput} label="Work" name="work" />
        </Box>
      </Box>
    </Form>
  );
}
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
    <DocsCard>
      <Grid
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
        <Box
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
        <Box
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
            <Button
              label="Edit"
              primary
              onClick={() => editContact(contactId)}
            />
          )}
        </Box>
        <Box gridArea="ContactsSidebar" pad="none" border={[{ side: 'right' }]}>
          <ContactsList
            contacts={contacts}
            contactId={contactId}
            openContact={openContact}
          />
        </Box>
        <Box gridArea="ContactsMain" pad="medium">
          {isEditMode ? (
            <ContactForm fields={contactUpdates} update={updateContact} />
          ) : (
            <Contact {...contact} />
          )}
        </Box>
      </Grid>
    </DocsCard>
  );
}
