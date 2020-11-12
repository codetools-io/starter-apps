import React from 'react';
import Profile from './Profile';

describe('Profile', () => {
  test('can render', () => {
    const { container } = renderContainer(<Profile />);

    expect(container).toMatchSnapshot();
  });
});
