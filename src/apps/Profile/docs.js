import React from 'react';
import { describe, PropTypes } from 'react-desc';
import { DocsPage } from 'internal/components/Docs';
import Profile from './Profile';
const usage = `
<Profile>
  // ...rest of the app.
<Profile>
`;
const ProfileWithSchema = describe(Profile)
  .description('An app for showing social information about a person.')
  .usage(usage);

ProfileWithSchema.displayName = 'Profile';

ProfileWithSchema.propTypes = {
  children: PropTypes.element.description(
    'The components to show inside of the main area of the Profile.'
  ),
};

export default () => {
  return <DocsPage component={ProfileWithSchema} />;
};
