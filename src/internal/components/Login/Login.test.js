import React from 'react'
import Login from './Login'

describe('Login', () => {
  test('can render', () => {
    const { container } = renderComponent(
      <Login>
        <p>Content for the Login</p>
      </Login>
    )

    expect(container).toMatchSnapshot()
  })
})

