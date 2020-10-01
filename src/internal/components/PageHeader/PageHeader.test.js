import React from 'react'
import PageHeader from './PageHeader'

describe('PageHeader', () => {
  test('can render', () => {
    const { container } = renderComponent(
      <PageHeader>
        <p>Content for the PageHeader</p>
      </PageHeader>
    )

    expect(container).toMatchSnapshot()
  })
})

