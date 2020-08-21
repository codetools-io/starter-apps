import React from 'react'
import Masthead from './Masthead'

describe('Masthead', () => {
  test('can render', () => {
    const { container } = renderComponent(
      <Masthead>
        <p>Content for the Masthead</p>
      </Masthead>
    )

    expect(container).toMatchSnapshot()
  })
})

