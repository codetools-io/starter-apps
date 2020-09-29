import React from 'react';
import { describe, PropTypes } from 'react-desc';
import { DocsPage } from 'internal/components/Docs';
import Contacts from './Contacts';
const usage = `
<Contacts>
  // ...rest of the app.
<Contacts>
`;
const ContactsWithSchema = describe(Contacts)
  .description('An app for managing information about lists of people.')
  .usage(usage);

ContactsWithSchema.displayName = 'Contacts';

ContactsWithSchema.propTypes = {
  children: PropTypes.element.description(
    'The components to show inside of the main area of the Contacts.'
  ),
};

export default () => {
  return <DocsPage component={ContactsWithSchema} />;
};
