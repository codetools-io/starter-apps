import React from 'react';
import AppLayout from './AppLayout';

describe('AppLayout', () => {
  test('can render', () => {
    const { container } = renderComponent(
      <AppLayout>
        <p>Content for the AppLayout</p>
      </AppLayout>
    );

    expect(container).toMatchSnapshot();
  });
});
