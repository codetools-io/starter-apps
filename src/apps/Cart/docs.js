import React from 'react';
import { describe, PropTypes } from 'react-desc';
import { DocsPage } from 'internal/components/Docs';
import Cart from './Cart';

const CartWithSchema = describe(Cart).description(
  'A feature for showing items that a customer intends to purchase.'
);

CartWithSchema.displayName = 'Cart';

CartWithSchema.propTypes = {
  children: PropTypes.element.description(
    'The components to show inside of the main area of the Cart.'
  ),
};

export default () => {
  return <DocsPage category="apps" component={CartWithSchema} />;
};
