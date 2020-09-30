import React from 'react'
import Home from './Home'

describe('Home', () => {
  test('can render', () => {
    const { container } = renderComponent(
      <Home>
        <p>Content for the Home</p>
      </Home>
    )

    expect(container).toMatchSnapshot()
  })
})

