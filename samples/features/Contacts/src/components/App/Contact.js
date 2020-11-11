import React from 'react';
import { Box, Heading, Image, List, Text } from 'grommet';

export default function Contact({
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
    <Box className="Contact" direction="row" gap="medium">
      <Box className="ContactProfile" gap="xsmall">
        <Box>
          <Image src={profile} fit="cover" />
        </Box>
        <Heading level={4} margin="none">
          {firstName} {lastName}
        </Heading>
        <Text size="small">{company}</Text>
      </Box>
      <Box className="ContactDetails" gap="small" flex>
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
