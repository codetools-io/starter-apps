import React from 'react';
import Link from './Link';

describe('Link', () => {
  test('can render', () => {
    const { container } = renderComponent(
      <Link to="/">Content for the Link</Link>
    );

    expect(container).toMatchSnapshot();
  });
});
