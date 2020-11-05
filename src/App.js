import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Amplify, { Auth } from 'aws-amplify';
import Router from './Router';
import AppShell from 'internal/components/AppShell';
import ErrorBoundary from 'internal/components/ErrorBoundary';
import awsConfig from './aws-exports';
const PUBLIC_URL = process.env.PUBLIC_URL;
Amplify.configure(awsConfig);

export default function App() {
  const [docs, setDocs] = useState();
  const [site, setSite] = useState();
  const [currentUser, setCurrentUser] = useState();

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

  useEffect(() => {
    Auth.currentUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => console.error(err));
  }, []);

  function login() {
    Auth.federatedSignIn({ provider: 'Google' });
  }

  function logout() {
    Auth.signOut();
  }

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AppShell
          {...site}
          currentUser={currentUser}
          login={login}
          logout={logout}
        >
          <Router docs={docs} />
        </AppShell>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
