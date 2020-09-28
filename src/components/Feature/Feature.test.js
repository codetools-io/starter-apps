import React from 'react';
import Feature from './Feature';

describe('Feature', () => {
  test('can render', () => {
    const { container } = renderComponent(
      <Feature name="EXAMPLE_FEATURE">
        <p>Content for a feature that should not be rendered</p>
      </Feature>
    );

    expect(container.child).toMatchSnapshot();
  });
});
