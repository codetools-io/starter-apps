import React, { useEffect, useState } from 'react';
import Amplify from 'aws-amplify';
import { BrowserRouter } from 'react-router-dom';

import Router from './Router';
import AppShell from 'internal/components/AppShell';
import ErrorBoundary from 'internal/components/ErrorBoundary';

import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

const PUBLIC_URL = process.env.PUBLIC_URL;

export default function App() {
  const [docs, setDocs] = useState();
  const [site, setSite] = useState();

  useEffect(() => {
    fetch(`${PUBLIC_URL}/data/docs.json`)
      .then((res) => res.json())
      .then((data) => setDocs(data))
      .catch((err) => console.error(err));
    fetch(`${PUBLIC_URL}/data/site.json`)
      .then((res) => res.json())
      .then((data) => setSite(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AppShell {...site}>
          <Router docs={docs} />
        </AppShell>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
