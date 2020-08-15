import React from 'react'
import Calendar from './Calendar'

describe('Calendar', () => {
  test('can render', () => {
    const { container } = renderContainer(
      <Calendar>
        <p>Content for the Calendar</p>
      </Calendar>
    )

    expect(container).toMatchSnapshot()
  })
})

