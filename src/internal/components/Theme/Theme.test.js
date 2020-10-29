import React from 'react'
import Theme from './Theme'

describe('Theme', () => {
  test('can render', () => {
    const { container } = renderComponent(
      <Theme>
        <p>Content for the Theme</p>
      </Theme>
    )

    expect(container).toMatchSnapshot()
  })
})

