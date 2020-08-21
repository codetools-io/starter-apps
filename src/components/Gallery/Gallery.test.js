import React from 'react'
import Gallery from './Gallery'

describe('Gallery', () => {
  test('can render', () => {
    const { container } = renderComponent(
      <Gallery>
        <p>Content for the Gallery</p>
      </Gallery>
    )

    expect(container).toMatchSnapshot()
  })
})

