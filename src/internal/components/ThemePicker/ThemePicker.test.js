import React from 'react'
import ThemePicker from './ThemePicker'

describe('ThemePicker', () => {
  test('can render', () => {
    const { container } = renderComponent(
      <ThemePicker>
        <p>Content for the ThemePicker</p>
      </ThemePicker>
    )

    expect(container).toMatchSnapshot()
  })
})

