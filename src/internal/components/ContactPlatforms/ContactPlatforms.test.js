import React from 'react'
import ContactPlatforms from './ContactPlatforms'

describe('ContactPlatforms', () => {
  test('can render', () => {
    const { container } = renderComponent(
      <ContactPlatforms>
        <p>Content for the ContactPlatforms</p>
      </ContactPlatforms>
    )

    expect(container).toMatchSnapshot()
  })
})

