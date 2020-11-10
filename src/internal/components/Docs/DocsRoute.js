import React from 'react';
import { Route } from 'react-router-dom';
import Docs from './Docs';
export default function DocsRoute({
  component,
  path,
  docs,
  pageProps = {},
  bookmarks = [],
  onBookmark = () => {},
  ...props
}) {
  return (
    <Route path={path} {...props}>
      <Docs
        component={component}
        docs={docs}
        path={path}
        bookmarks={bookmarks}
        onBookmark={onBookmark}
        {...pageProps}
      />
    </Route>
  );
}
