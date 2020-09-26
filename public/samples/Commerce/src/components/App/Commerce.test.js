import React from 'react'
import Commerce from './Commerce'

describe('Commerce', () => {
  test('can render', () => {
    const { container } = renderContainer(
      <Commerce>
        <p>Content for the Commerce</p>
      </Commerce>
    )

    expect(container).toMatchSnapshot()
  })
})

