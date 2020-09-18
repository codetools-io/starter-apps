import React from 'react'
import Docs from './Docs'

describe('Docs', () => {
  test('can render', () => {
    const { container } = renderComponent(
      <Docs>
        <p>Content for the Docs</p>
      </Docs>
    )

    expect(container).toMatchSnapshot()
  })
})

