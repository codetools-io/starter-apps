import React from 'react';
import { Box, Form, FormField, Image, TextInput } from 'grommet';

export default function ContactForm({ fields, update }) {
  return (
    <Form
      className="ContactForm"
      value={fields}
      onChange={(changes) => update(changes)}
    >
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
