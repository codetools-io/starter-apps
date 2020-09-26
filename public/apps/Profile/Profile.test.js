import React from 'react';
import Profile from './Profile';

describe('Profile', () => {
  test('can render', () => {
    const result = render(<Profile />);

    expect(result.toJSON()).toMatchSnapshot();
  });
});
