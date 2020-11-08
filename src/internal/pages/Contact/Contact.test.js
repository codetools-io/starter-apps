import React from 'react'
import Contact from './Contact'

describe('Contact', () => {
  test('can render', () => {
    const { container } = renderComponent(
      <Contact>
        <p>Content for the Contact</p>
      </Contact>
    )

    expect(container).toMatchSnapshot()
  })
})

