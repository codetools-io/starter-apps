import React from 'react';
import { describe, PropTypes } from 'react-desc';
import { DocsPage } from 'components/Docs';
import Email from './Email';
const usage = `
<Email>
  // ...rest of the app.
<Email>
`;
const EmailWithSchema = describe(Email)
  .description('An app for managing email.')
  .usage(usage);

EmailWithSchema.propTypes = {
  children: PropTypes.element.description(
    'The components to show inside of the main area of the Email.'
  ),
};

export default () => {
  return <DocsPage component={EmailWithSchema} />;
};
