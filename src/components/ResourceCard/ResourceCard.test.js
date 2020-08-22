import React from 'react'
import ResourceCard from './ResourceCard'

describe('ResourceCard', () => {
  test('can render', () => {
    const { container } = renderComponent(
      <ResourceCard>
        <p>Content for the ResourceCard</p>
      </ResourceCard>
    )

    expect(container).toMatchSnapshot()
  })
})

