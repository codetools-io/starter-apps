import React from 'react';
import { describe, PropTypes } from 'react-desc';
import { DocsPage } from 'internal/components/Docs';
import Email from './Email';

const EmailWithSchema = describe(Email).description(
  'An app for managing email.'
);

EmailWithSchema.displayName = 'Email';

EmailWithSchema.propTypes = {
  children: PropTypes.element.description(
    'The components to show inside of the main area of the Email.'
  ),
};

export default () => {
  return <DocsPage category="apps" component={EmailWithSchema} />;
};
