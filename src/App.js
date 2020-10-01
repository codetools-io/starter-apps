import React from 'react';
import Amplify from 'aws-amplify';
import { BrowserRouter } from 'react-router-dom';

import Router from 'Router';
import AppShell from 'internal/components/AppShell';
import ErrorBoundary from 'internal/components/ErrorBoundary';

import awsconfig from './aws-exports';

Amplify.configure(awsconfig);
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
