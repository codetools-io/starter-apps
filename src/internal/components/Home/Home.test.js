import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

describe('Home', () => {
  test('can render', () => {
    const { container } = renderComponent(
      <BrowserRouter>
        <Home>
          <p>Content for the Home</p>
        </Home>
      </BrowserRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
