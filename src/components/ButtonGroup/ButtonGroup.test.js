import React from 'react'
import ButtonGroup from './ButtonGroup'

describe('ButtonGroup', () => {
  test('can render', () => {
    const { container } = renderComponent(
      <ButtonGroup>
        <p>Content for the ButtonGroup</p>
      </ButtonGroup>
    )

    expect(container).toMatchSnapshot()
  })
})

