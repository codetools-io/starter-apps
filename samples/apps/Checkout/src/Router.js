import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

export default function Router() {
  const App = lazy(() => import(`./components/App`));

  return (
    <Suspense fallback={<p>loading route…</p>}>
      <Switch>
        <Route component={App} path="/" />
      </Switch>
    </Suspense>
  );
}
