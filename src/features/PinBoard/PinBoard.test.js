import React from 'react'
import PinBoard from './PinBoard'

describe('PinBoard', () => {
  test('can render', () => {
    const { container } = renderContainer(
      <PinBoard>
        <p>Content for the PinBoard</p>
      </PinBoard>
    )

    expect(container).toMatchSnapshot()
  })
})

