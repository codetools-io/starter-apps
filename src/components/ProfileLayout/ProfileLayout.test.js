import React from 'react'
import ProfileLayout from './ProfileLayout'

describe('ProfileLayout', () => {
  test('can render', () => {
    const { container } = renderComponent(
      <ProfileLayout>
        <p>Content for the ProfileLayout</p>
      </ProfileLayout>
    )

    expect(container).toMatchSnapshot()
  })
})

