import React from 'react'
import Tag from './Tag'

describe('Tag', () => {
  test('can render', () => {
    const { container } = renderComponent(
      <Tag>
        <p>Content for the Tag</p>
      </Tag>
    )

    expect(container).toMatchSnapshot()
  })
})

