import React from 'react';
import ThreadLayout from './ThreadLayout';

describe('ThreadLayout', () => {
  test('can render', () => {
    const { container } = renderComponent(
      <ThreadLayout>
        <p>Content for the ThreadLayout</p>
      </ThreadLayout>
    );

    expect(container).toMatchSnapshot();
  });
});
