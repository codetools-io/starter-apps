import React from 'react';
import Contacts from './Contacts';

describe('Contacts', () => {
  test('can render', () => {
    const { container } = renderContainer(
      <Contacts>
        <p>Content for the Contacts</p>
      </Contacts>
    );

    expect(container).toMatchSnapshot();
  });
});
