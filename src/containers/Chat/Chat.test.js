import React from 'react'
import Chat from './Chat'

describe('Chat', () => {
  test('can render', () => {
    const { container } = renderContainer(
      <Chat>
        <p>Content for the Chat</p>
      </Chat>
    )

    expect(container).toMatchSnapshot()
  })
})

