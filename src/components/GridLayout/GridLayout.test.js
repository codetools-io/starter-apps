import React from 'react'
import GridLayout from './GridLayout'

describe('GridLayout', () => {
  test('can render', () => {
    const { container } = renderComponent(
      <GridLayout>
        <p>Content for the GridLayout</p>
      </GridLayout>
    )

    expect(container).toMatchSnapshot()
  })
})

