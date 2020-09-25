import React from 'react';
import Store from './Store';

describe('Store', () => {
  test('can render', () => {
    const { container } = renderContainer(
      <Store>
        <p>Content for the Store</p>
      </Store>
    );

    expect(container).toMatchSnapshot();
  });
});
