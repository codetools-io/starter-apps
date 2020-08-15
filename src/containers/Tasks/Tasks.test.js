import React from 'react'
import Tasks from './Tasks'

describe('Tasks', () => {
  test('can render', () => {
    const { container } = renderContainer(
      <Tasks>
        <p>Content for the Tasks</p>
      </Tasks>
    )

    expect(container).toMatchSnapshot()
  })
})

