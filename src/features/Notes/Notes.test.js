import React from 'react';
import Notes from './Notes';

describe('Notes', () => {
  test('can render', () => {
    const { container } = renderContainer(
      <Notes>
        <p>Content for the Notes</p>
      </Notes>
    );

    expect(container).toMatchSnapshot();
  });
});
