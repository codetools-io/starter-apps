import React from 'react';
import { describe, PropTypes } from 'react-desc';
import { DocsPage } from 'components/Docs';
import Store from './Store';
const usage = `
<Store>
  // ...rest of the app.
<Store>
`;
const StoreWithSchema = describe(Store)
  .description('An app for showing products to a customer.')
  .usage(usage);

StoreWithSchema.displayName = 'Store';

StoreWithSchema.propTypes = {
  children: PropTypes.element.description(
    'The components to show inside of the main area of the Store.'
  ),
};

export default () => {
  return <DocsPage component={StoreWithSchema} />;
};
