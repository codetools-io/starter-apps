import React from 'react'
import Profile from './Profile'

describe('Profile', () => {
  test('can render', () => {
    const { container } = renderContainer(
      <Profile>
        <p>Content for the Profile</p>
      </Profile>
    )

    expect(container).toMatchSnapshot()
  })
})

