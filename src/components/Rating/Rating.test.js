import React from 'react'
import Rating from './Rating'

describe('Rating', () => {
  test('can render', () => {
    const { container } = renderComponent(
      <Rating>
        <p>Content for the Rating</p>
      </Rating>
    )

    expect(container).toMatchSnapshot()
  })
})

