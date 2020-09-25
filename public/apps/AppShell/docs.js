import React from 'react';
import { describe, PropTypes } from 'react-desc';
import { DocsPage } from 'components/Docs';
import AppShell from './AppShell';

const AppShellWithSchema = describe(AppShell).description(
  'A global shell to wrap applications with. Configurable subcomponents include a logo, navigation, router, notification system, search, and user menu.'
);

AppShellWithSchema.propTypes = {
  children: PropTypes.element.description(
    'The components to show inside of the main area of the AppShell.'
  ),
};

AppShellWithSchema.displayName = 'AppShell';

export default () => {
  return <DocsPage component={AppShellWithSchema} />;
};
