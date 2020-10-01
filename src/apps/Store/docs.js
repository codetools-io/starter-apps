import React from 'react';
import { describe, PropTypes } from 'react-desc';
import { DocsPage } from 'internal/components/Docs';
import Store from './Store';

const StoreWithSchema = describe(Store).description(
  'A feature for showing products to a customer.'
);

StoreWithSchema.displayName = 'Store';

StoreWithSchema.propTypes = {
  children: PropTypes.element.description(
    'The components to show inside of the main area of the Store.'
  ),
};

export default () => {
  return <DocsPage category="apps" component={StoreWithSchema} />;
};
