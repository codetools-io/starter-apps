import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'jest-extended';
import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Grommet } from 'grommet';
import ErrorBoundary from 'components/ErrorBoundary';

global.renderContainer = (component, path = '/') => {
  return render(
    <ErrorBoundary>
      <Grommet theme={{}}>
        <BrowserRouter>
          <Switch>
            <Route path={path}>{component}</Route>
          </Switch>
        </BrowserRouter>
      </Grommet>
    </ErrorBoundary>
  );
};

global.renderComponent = (Component) => {
  return render(Component);
};

global.render = (component) => {
  return TestRenderer.create(component);
};
