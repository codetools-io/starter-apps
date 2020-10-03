import React from 'react'
import Icon from './Icon'

describe('Icon', () => {
  test('can render', () => {
    const { container } = renderComponent(
      <Icon>
        <p>Content for the Icon</p>
      </Icon>
    )

    expect(container).toMatchSnapshot()
  })
})

