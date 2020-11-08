import React from 'react'
import Divider from './Divider'

describe('Divider', () => {
  test('can render', () => {
    const { container } = renderComponent(
      <Divider>
        <p>Content for the Divider</p>
      </Divider>
    )

    expect(container).toMatchSnapshot()
  })
})

