import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from 'Router';
import AppShell from 'internal/components/AppShell';
import ErrorBoundary from 'internal/components/ErrorBoundary';

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AppShell>
          <Router />
        </AppShell>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
