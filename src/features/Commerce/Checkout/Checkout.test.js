import React from 'react';
import Checkout from './Checkout';

describe('Checkout', () => {
  test('can render', () => {
    const { container } = renderContainer(
      <Checkout>
        <p>Content for the Checkout</p>
      </Checkout>
    );

    expect(container).toMatchSnapshot();
  });
});
