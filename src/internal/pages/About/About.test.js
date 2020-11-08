import React from 'react'
import About from './About'

describe('About', () => {
  test('can render', () => {
    const { container } = renderComponent(
      <About>
        <p>Content for the About</p>
      </About>
    )

    expect(container).toMatchSnapshot()
  })
})

