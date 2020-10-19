import React from 'react';
import Socials from './Socials';

describe('Socials', () => {
  test('can render', () => {
    const { container } = renderComponent(
      <Socials twitter github codeSandbox />
    );

    expect(container).toMatchSnapshot();
  });
});
