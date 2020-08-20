import React from 'react'
import Link from './Link'

describe('Link', () => {
  test('can render', () => {
    const { container } = renderComponent(
      <Link>
        <p>Content for the Link</p>
      </Link>
    )

    expect(container).toMatchSnapshot()
  })
})

