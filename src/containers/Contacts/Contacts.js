import React from 'react';
import {
  Box,
  Card,
  Button,
  Form,
  FormField,
  Heading,
  Image,
  List,
  Text,
  TextInput,
} from 'grommet';
import AppLayout from 'components/AppLayout';
import useContacts from './useContacts';

function Connections({ connections, connectionId, openConnection }) {
  return (
    <Box gap="medium">
      {connections.map((connection) => {
        return (
          <Button
            key={`connection-${connection.id}`}
            onClick={() => openConnection(connection.id)}
          >
            <Box
              background={connectionId === connection.id ? 'light-1' : null}
              pad={{ vertical: 'small', horizontal: 'medium' }}
            >
              <Text>
                {connection.firstName} {connection.lastName}
              </Text>

              <Text size="small" color="dark-6">
                {connection.company}
              </Text>
            </Box>
          </Button>
        );
      })}
    </Box>
  );
}

function Connection({
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
          data={[
            { label: 'id', value: id },
            { label: 'First Name', value: firstName },
            { label: 'Last Name', value: lastName },
            { label: 'Company', value: company },

            { label: 'Email', value: email },
            { label: 'Mobile', value: mobile },
            { label: 'Home', value: home },
            { label: 'Work', value: work },
          ]}
        />
      </Box>
    </Box>
  );
}

function ConnectionForm({ fields, update }) {
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
    connections,
    connection,
    connectionId,
    updateConnection,
    openConnection,
    editConnection,
    cancelEdit,
    saveChanges,
    isEditMode,
    connectionUpdates,
  } = useContacts();

  return (
    <Box pad="medium" fill>
      <Card background="white">
        <AppLayout>
          <Box
            gridArea="sidebar-header"
            pad="medium"
            border={[{ side: 'right' }, { side: 'bottom' }]}
          >
            <TextInput placeholder="Search contacts" />
          </Box>
          <Box
            gridArea="header"
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
                  onClick={() => saveChanges({ ...connectionUpdates })}
                />
              </Box>
            ) : (
              <Button
                label="Edit"
                primary
                onClick={() => editConnection(connectionId)}
              />
            )}
          </Box>
          <Box gridArea="sidebar" pad="none" border={[{ side: 'right' }]}>
            <Connections
              connections={connections}
              connectionId={connectionId}
              openConnection={openConnection}
            />
          </Box>
          <Box gridArea="main" pad="medium">
            {isEditMode ? (
              <ConnectionForm
                fields={connectionUpdates}
                update={updateConnection}
              />
            ) : (
              <Connection {...connection} />
            )}
          </Box>
        </AppLayout>
      </Card>
    </Box>
  );
}
