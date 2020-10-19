import React from 'react';
import PageHeader from './PageHeader';

describe('PageHeader', () => {
  test('can render', () => {
    const { container } = renderComponent(
      <PageHeader
        title="Example of title"
        description="A short description about the page"
      />
    );

    expect(container).toMatchSnapshot();
  });
});
