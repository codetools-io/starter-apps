import React from 'react';
import { describe, PropTypes } from 'react-desc';
import { DocsPage } from 'components/Docs';
import Cart from './Cart';
const usage = `
<Cart>
  // ...rest of the app.
<Cart>
`;
const CartWithSchema = describe(Cart)
  .description('An app for showing items that a customer intends to purchase.')
  .usage(usage);

CartWithSchema.propTypes = {
  children: PropTypes.element.description(
    'The components to show inside of the main area of the Cart.'
  ),
};

export default () => {
  return <DocsPage component={CartWithSchema} />;
};
