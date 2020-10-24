import React from 'react'
import ImageEditor from './ImageEditor'

describe('ImageEditor', () => {
  test('can render', () => {
    const { container } = renderContainer(
      <ImageEditor>
        <p>Content for the ImageEditor</p>
      </ImageEditor>
    )

    expect(container).toMatchSnapshot()
  })
})

