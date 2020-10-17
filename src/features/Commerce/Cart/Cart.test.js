import React from 'react';
import Cart from './Cart';

describe('Cart', () => {
  test('can render', () => {
    const { container } = renderContainer(
      <Cart>
        <p>Content for the Cart</p>
      </Cart>
    );

    expect(container).toMatchSnapshot();
  });
});
