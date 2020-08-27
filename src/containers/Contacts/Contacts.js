import React from 'react';
import { Box, Card, Button, Heading, Image, Text, TextInput } from 'grommet';
import AppLayout from 'components/AppLayout';
import useContacts from './useContacts';

function Connections({ connections, currentConnectionId }) {
  return (
    <Box gap="medium">
      {connections.map((connection) => {
        return (
          <Box
            background={
              currentConnectionId === connection.id ? 'light-1' : null
            }
            pad={{ vertical: 'small', horizontal: 'medium' }}
          >
            <Text>
              {connection.firstName} {connection.lastName}
            </Text>

            <Text size="small" color="dark-6">
              {connection.company}
            </Text>
          </Box>
        );
      })}
    </Box>
  );
}

function Connection({
  id,
  firstName,
  lastName,
  username,
  contactInfo,
  company,
  profile,
}) {
  return (
    <Box direction="row" gap="small">
      <Box gap="xsmall">
        <Image src={profile} fit="cover" />
        <Heading level={4} margin="none">
          {firstName} {lastName}
        </Heading>
        <Text size="small">{company}</Text>
      </Box>
      <Box gap="small">
        {Object.entries(contactInfo).map((field) => {
          const [name, value] = field;

          return (
            <Box key={`${id}-field-${name}`} direction="row" gap="xsmall">
              <Box width="xsmall">
                <Text weight="bold">{name}:</Text>
              </Box>
              <Box>
                <Text>{value}</Text>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
export default function Contacts({ children, ...props }) {
  const { connections, currentConnection, currentConnectionId } = useContacts();

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
            <Button label="Add Contact" primary />
          </Box>
          <Box gridArea="sidebar" pad="none" border={[{ side: 'right' }]}>
            <Connections
              connections={connections}
              currentConnectionId={currentConnectionId}
            />
          </Box>
          <Box gridArea="main" pad="medium">
            <Connection {...currentConnection} />
          </Box>
        </AppLayout>
      </Card>
    </Box>
  );
}
