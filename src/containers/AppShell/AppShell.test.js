import React from 'react';
import AppShell from './AppShell';

test('Can render AppShell', () => {
  const { container } = renderContainer(
    <AppShell>
      <p>Content for the AppShell</p>
    </AppShell>
  );

  expect(container).toMatchSnapshot();
});
