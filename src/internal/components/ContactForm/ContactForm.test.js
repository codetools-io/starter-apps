import React from 'react'
import ContactForm from './ContactForm'

describe('ContactForm', () => {
  test('can render', () => {
    const { container } = renderComponent(
      <ContactForm>
        <p>Content for the ContactForm</p>
      </ContactForm>
    )

    expect(container).toMatchSnapshot()
  })
})

