import React from 'react';
import LayoutExplorer from './LayoutExplorer';
import { Box } from 'grommet';

describe('LayoutExplorer', () => {
  test('can render', () => {
    const { container } = renderContainer(
      <LayoutExplorer>
        <p>Content for the LayoutExplorer</p>
      </LayoutExplorer>
    );

    expect(container).toMatchSnapshot();
  });
});
