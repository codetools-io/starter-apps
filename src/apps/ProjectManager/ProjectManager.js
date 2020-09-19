import React, { lazy, Suspense } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { DocsTheme } from 'components/Docs';
export default function ProjectManager() {
  const ProjectsDashboard = lazy(() => import('./ProjectsDashboard'));
  const ProjectBoard = lazy(() => import('./ProjectBoard'));
  const { path } = useRouteMatch();

  return (
    <DocsTheme>
      <Suspense fallback={<p>loading route…</p>}>
        <Switch>
          <Route component={ProjectsDashboard} path={path} exact />
          <Route component={ProjectBoard} path={`${path}/:projectId`} />
        </Switch>
      </Suspense>
    </DocsTheme>
  );
}
