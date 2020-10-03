import React from 'react';
import Feed from './Feed';

describe('Feed', () => {
  test('can render', () => {
    const { container } = renderContainer(<Feed />);

    expect(container).toMatchSnapshot();
  });
});
