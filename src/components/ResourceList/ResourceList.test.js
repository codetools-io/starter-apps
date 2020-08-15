import React from 'react'
import ResourceList from './ResourceList'

describe('ResourceList', () => {
  test('can render', () => {
    const { container } = renderComponent(
      <ResourceList>
        <p>Content for the ResourceList</p>
      </ResourceList>
    )

    expect(container).toMatchSnapshot()
  })
})

