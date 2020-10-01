import React from 'react';
import Store from './Store';

describe('Store', () => {
  test('can render', () => {
    const { container } = renderContainer(<Store />);

    expect(container).toMatchSnapshot();
  });
});
