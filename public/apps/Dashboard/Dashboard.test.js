import React from 'react'
import Dashboard from './Dashboard'
import { render } from '@testing-library/react'

test('Can render Dashboard', () => {
  const { container } = render(
    <Dashboard>
      <p>Content for the Dashboard</p>
    </Dashboard>
  )

  expect(container).toMatchSnapshot()
})
