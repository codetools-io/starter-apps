import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import ErrorBoundary from './components/ErrorBoundary';
import Theme from './components/Theme';

export default function AppShell() {
  return (
    <ErrorBoundary>
      <Theme>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Theme>
    </ErrorBoundary>
  );
}
