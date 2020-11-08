import React from 'react';
import { Box, Button, Form, FormField, TextArea, TextInput } from 'grommet';

export default function ContactForm({ children, ...props }) {
  return (
    <Box className="ContactForm" {...props}>
      <Form>
        <Box gap="medium" fill="horizontal">
          <FormField
            component={TextInput}
            name="name"
            label="Name"
            required={true}
          />
          <FormField
            component={TextInput}
            name="email"
            label="Email"
            required={true}
          />
          <FormField
            component={TextInput}
            name="subject"
            label="Subject"
            required={true}
          />
          <FormField
            component={TextArea}
            name="subject"
            label="Message"
            required={true}
            rows="10"
            fill
          />
          <Box align="end">
            <Button label="Send Message" type="submit" primary />
          </Box>
        </Box>
      </Form>
    </Box>
  );
}
