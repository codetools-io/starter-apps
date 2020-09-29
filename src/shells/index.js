import React, { lazy, Suspense } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

export default function Router() {
  const { path } = useRouteMatch();
  const AppShellDocs = lazy(() => import('./AppShell/docs'));

  return (
    <Suspense fallback={<p>loading route…</p>}>
      <Switch>
        <Route component={AppShellDocs} path={`${path}/app-shell`} />
      </Switch>
    </Suspense>
  );
}
