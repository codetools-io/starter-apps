import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import LayoutExplorer from 'containers/LayoutExplorer';

export default function Router() {
  const Calendar = lazy(() => import('./containers/Calendar'));
  const Chat = lazy(() => import('./containers/Chat'));
  const Commerce = lazy(() => import('./containers/Commerce'));
  const Contacts = lazy(() => import('./containers/Contacts'));
  const Dashboard = lazy(() => import('./containers/Dashboard'));
  const Email = lazy(() => import('./containers/Email'));
  const Notes = lazy(() => import('./containers/Notes'));
  const Profile = lazy(() => import('./containers/Profile'));
  const ProjectManager = lazy(() => import('./containers/ProjectManager'));
  // const Tasks = lazy(() => import('./containers/Tasks'));

  return (
    <Suspense fallback={<p>loading route…</p>}>
      <Switch>
        <Route path="/" exact />
        <Route component={() => <div>login</div>} path="/login" />
        <Route component={Calendar} path="/calendar" />
        <Route component={Chat} path="/chat" />
        <Route component={Commerce} path="/commerce" />
        <Route component={Contacts} path="/contacts" />
        <Route component={Dashboard} path="/dashboard" />
        <Route component={Email} path="/email" />
        <Route component={Notes} path="/notes" />
        <Route component={Profile} path="/profile" />
        <Route component={ProjectManager} path="/project-manager" />

        <Route component={ProjectManager} path="/project-manager" />
        <Route component={LayoutExplorer} path="/layout-explorer" />
        {/* <Route component={Tasks} path="/tasks" /> */}
      </Switch>
    </Suspense>
  );
}
