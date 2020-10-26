import React from 'react';
import ImageEditor from './ImageEditor';

describe('ImageEditor', () => {
  test('can render', () => {
    const { container } = renderContainer(<ImageEditor />);

    expect(container).toMatchSnapshot();
  });
});
