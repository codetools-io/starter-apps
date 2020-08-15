import React from 'react';
import { Router as ReactRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Router from 'Router';
import AppShell from 'containers/AppShell';
import ErrorBoundary from 'containers/ErrorBoundary';

import './App.css';

const history = createBrowserHistory();

export default function App() {
  return (
    <ErrorBoundary>
      <ReactRouter history={history}>
        <AppShell>
          <Router />
        </AppShell>
      </ReactRouter>
    </ErrorBoundary>
  );
}
