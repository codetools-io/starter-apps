import React from 'react'
import Socials from './Socials'

describe('Socials', () => {
  test('can render', () => {
    const { container } = renderComponent(
      <Socials>
        <p>Content for the Socials</p>
      </Socials>
    )

    expect(container).toMatchSnapshot()
  })
})

