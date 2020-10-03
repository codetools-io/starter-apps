import React, { lazy, Suspense } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

export default function ProjectManager() {
  const ProjectsDashboard = lazy(() => import('./ProjectsDashboard'));
  const ProjectBoard = lazy(() => import('./ProjectBoard'));
  const { path } = useRouteMatch();

  return (
    <Suspense fallback={<p>loading route…</p>}>
      <Switch>
        <Route component={ProjectsDashboard} path={path} exact />
        <Route component={ProjectBoard} path={`${path}/:projectId`} />
      </Switch>
    </Suspense>
  );
}
