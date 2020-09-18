import React from 'react'
import Email from './Email'

describe('Email', () => {
  test('can render', () => {
    const { container } = renderContainer(
      <Email>
        <p>Content for the Email</p>
      </Email>
    )

    expect(container).toMatchSnapshot()
  })
})

