import React from 'react'
import Bookmarks from './Bookmarks'

describe('Bookmarks', () => {
  test('can render', () => {
    const { container } = renderComponent(
      <Bookmarks>
        <p>Content for the Bookmarks</p>
      </Bookmarks>
    )

    expect(container).toMatchSnapshot()
  })
})

