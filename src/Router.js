import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

export default function Router() {
  const Dashboard = lazy(() => import('./containers/Dashboard'));

  return (
    <Suspense fallback={<p>loading route…</p>}>
      <Switch>
        <Route path="/" exact />
        <Router component={() => <div>login</div>} path="/login" />
        <Router component={Dashboard} path="/dashboard" />
      </Switch>
    </Suspense>
  );
}
