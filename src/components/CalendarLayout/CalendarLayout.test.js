import React from 'react'
import CalendarLayout from './CalendarLayout'

describe('CalendarLayout', () => {
  test('can render', () => {
    const { container } = renderComponent(
      <CalendarLayout>
        <p>Content for the CalendarLayout</p>
      </CalendarLayout>
    )

    expect(container).toMatchSnapshot()
  })
})

