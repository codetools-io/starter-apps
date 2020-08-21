import React from 'react'
import ChatLayout from './ChatLayout'

describe('ChatLayout', () => {
  test('can render', () => {
    const { container } = renderComponent(
      <ChatLayout>
        <p>Content for the ChatLayout</p>
      </ChatLayout>
    )

    expect(container).toMatchSnapshot()
  })
})

