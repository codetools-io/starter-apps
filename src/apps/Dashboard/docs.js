import React from 'react';
import { describe, PropTypes } from 'react-desc';
import { DocsPage } from 'components/Docs';
import Dashboard from './Dashboard';
const usage = `
<Dashboard>
  // ...rest of the app.
<Dashboard>
`;
const DashboardWithSchema = describe(Dashboard)
  .description(
    'An app for viewing high-level information about systems and organizations.'
  )
  .usage(usage);

DashboardWithSchema.propTypes = {
  children: PropTypes.element.description(
    'The components to show inside of the main area of the Dashboard.'
  ),
};

export default () => {
  return <DocsPage component={DashboardWithSchema} />;
};
