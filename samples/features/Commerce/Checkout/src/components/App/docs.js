import React from 'react';
import { describe, PropTypes } from 'react-desc';
import { DocsPage } from 'internal/components/Docs';
import Checkout from './Checkout';

const CheckoutWithSchema = describe(Checkout).description(
  'A feature for showing items that a customer is about to purchase.'
);
CheckoutWithSchema.displayName = 'Checkout';

CheckoutWithSchema.propTypes = {
  children: PropTypes.element.description(
    'The components to show inside of the main area of the Checkout.'
  ),
};

export default () => {
  return <DocsPage category="apps" component={CheckoutWithSchema} />;
};
