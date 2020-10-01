import React from 'react'
import ProjectManager from './ProjectManager'

describe('ProjectManager', () => {
  test('can render', () => {
    const { container } = renderContainer(
      <ProjectManager>
        <p>Content for the ProjectManager</p>
      </ProjectManager>
    )

    expect(container).toMatchSnapshot()
  })
})

