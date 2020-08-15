import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import { render } from '@testing-library/react';

test('Can render ErrorBoundary', () => {
  const { container } = render(
    <ErrorBoundary>
      <p>Content for the ErrorBoundary</p>
    </ErrorBoundary>
  );

  expect(container).toMatchSnapshot();
});
