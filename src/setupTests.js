import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'jest-extended';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

global.renderContainer = (Component, path = '/') => {
  return render(
    <BrowserRouter>
      <Switch>
        <Route path={path}>{Component}</Route>
      </Switch>
    </BrowserRouter>
  );
};

global.renderComponent = (Component) => {
  return render(Component);
};
