import React from 'react'
import Shop from './Shop'

describe('Shop', () => {
  test('can render', () => {
    const { container } = renderContainer(
      <Shop>
        <p>Content for the Shop</p>
      </Shop>
    )

    expect(container).toMatchSnapshot()
  })
})

