import React from 'react'
import TooltipButton from './TooltipButton'

describe('TooltipButton', () => {
  test('can render', () => {
    const { container } = renderComponent(
      <TooltipButton>
        <p>Content for the TooltipButton</p>
      </TooltipButton>
    )

    expect(container).toMatchSnapshot()
  })
})

