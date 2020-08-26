import React from 'react'
import ColumnLayout from './ColumnLayout'

describe('ColumnLayout', () => {
  test('can render', () => {
    const { container } = renderComponent(
      <ColumnLayout>
        <p>Content for the ColumnLayout</p>
      </ColumnLayout>
    )

    expect(container).toMatchSnapshot()
  })
})

