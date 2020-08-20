import React from 'react'
import NavLink from './NavLink'

describe('NavLink', () => {
  test('can render', () => {
    const { container } = renderComponent(
      <NavLink>
        <p>Content for the NavLink</p>
      </NavLink>
    )

    expect(container).toMatchSnapshot()
  })
})

