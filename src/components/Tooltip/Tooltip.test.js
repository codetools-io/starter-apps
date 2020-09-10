import React from 'react'
import Tooltip from './Tooltip'

describe('Tooltip', () => {
  test('can render', () => {
    const { container } = renderComponent(
      <Tooltip>
        <p>Content for the Tooltip</p>
      </Tooltip>
    )

    expect(container).toMatchSnapshot()
  })
})

