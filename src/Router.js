import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

export default function Router() {
  const Apps = lazy(() => import('./apps'));
  const Shells = lazy(() => import('./shells'));

  return (
    <Suspense fallback={<p>loading route…</p>}>
      <Switch>
        <Route component={Apps} path="/apps" />
        <Route component={Shells} path="/shells" />
      </Switch>
    </Suspense>
  );
}
