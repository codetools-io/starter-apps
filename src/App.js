import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Amplify, { API, Auth } from 'aws-amplify';
import AppShell from 'internal/components/AppShell';
import ErrorBoundary from 'internal/components/ErrorBoundary';
import Router from './Router';
import awsConfig from './aws-exports';
import * as analytics from './analytics';
import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';

const PUBLIC_URL = process.env.PUBLIC_URL;

Amplify.configure(awsConfig);

analytics.trackUsage();

export default function App() {
  const [docs, setDocs] = useState();
  const [site, setSite] = useState();
  const [currentUser, setCurrentUser] = useState();
  const [bookmarks, setBookmarks] = useState();
  const onBookmark = useCallback(
    (bookmark) => {
      if (!currentUser) {
        login();
      } else {
        const currentBookmark = bookmarks?.find(
          (b) =>
            b?.componentId === bookmark?.componentId &&
            b?.categoryId === bookmark?.categoryId
        );
        if (!currentBookmark) {
          API.graphql({
            query: mutations.createBookmark,
            variables: { input: bookmark },
          })
            .then(({ data }) => {
              setBookmarks([...bookmarks, data.createBookmark]);
            })
            .catch((err) => console.log(err));
        } else {
          API.graphql({
            query: mutations.deleteBookmark,
            variables: { input: { id: currentBookmark.id } },
          })
            .then(({ data }) => {
              setBookmarks(
                bookmarks?.filter((b) => b.id !== data.deleteBookmark.id)
              );
            })
            .catch((err) => console.log(err));
        }
      }
    },
    [bookmarks, currentUser]
  );

  useEffect(() => {
    if (!docs) {
      fetch(`${PUBLIC_URL}/data/docs.json`)
        .then((res) => res.json())
        .then((data) => setDocs(data))
        .catch((err) => console.error(err));
    }
  }, [docs]);

  useEffect(() => {
    if (!site) {
      fetch(`${PUBLIC_URL}/data/site.json`)
        .then((res) => res.json())
        .then((data) => setSite(data))
        .catch((err) => console.error(err));
    }
  }, [site]);

  useEffect(() => {
    Auth.currentUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    analytics.trackUserId();
  }, []);

  useEffect(() => {
    if (currentUser && !bookmarks) {
      API.graphql({ query: queries.listBookmarks })
        .then(({ data }) => {
          setBookmarks(data?.listBookmarks?.items);
        })
        .catch((err) => console.error(err));
    }
  }, [currentUser, bookmarks]);

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
          <Router docs={docs} bookmarks={bookmarks} onBookmark={onBookmark} />
        </AppShell>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
