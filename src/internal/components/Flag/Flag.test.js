import React from 'react';
import Flag from './Flag';

describe('Flag', () => {
  test('can render', () => {
    const { container } = renderComponent(
      <Flag name="EXAMPLE_FLAG">
        <p>Content for a flag that should not be rendered</p>
      </Flag>
    );

    expect(container.child).toMatchSnapshot();
  });
});
