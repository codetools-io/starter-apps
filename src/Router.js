import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

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
  const Tasks = lazy(() => import('./containers/Tasks'));

  return (
    <Suspense fallback={<p>loading route…</p>}>
      <Switch>
        <Route path="/" exact />
        <Router component={() => <div>login</div>} path="/login" />
        <Router component={Calendar} path="/calendar" />
        <Router component={Chat} path="/chat" />
        <Router component={Commerce} path="/commerce" />
        <Router component={Contacts} path="/contacts" />
        <Router component={Dashboard} path="/dashboard" />
        <Router component={Email} path="/email" />
        <Router component={Notes} path="/notes" />
        <Router component={Profile} path="/profile" />
        <Router component={ProjectManager} path="/project-manager" />
        <Router component={Tasks} path="/tasks" />
      </Switch>
    </Suspense>
  );
}
