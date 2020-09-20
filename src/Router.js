import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

export default function Router() {
  const AppShellDocs = lazy(() => import('./apps/AppShell/docs'));
  const Calendar = lazy(() => import('./apps/Calendar'));
  const ChatDocs = lazy(() => import('./apps/Chat/docs'));
  const Commerce = lazy(() => import('./apps/Commerce'));
  const Contacts = lazy(() => import('./apps/Contacts'));
  const Dashboard = lazy(() => import('./apps/Dashboard'));
  const Email = lazy(() => import('./apps/Email'));
  const Notes = lazy(() => import('./apps/Notes'));
  const Profile = lazy(() => import('./apps/Profile'));
  const ProjectManager = lazy(() => import('./apps/ProjectManager'));

  return (
    <Suspense fallback={<p>loading route…</p>}>
      <Switch>
        <Route path="/" exact />

        <Route component={AppShellDocs} path="/app-shell" />
        <Route component={Calendar} path="/calendar" />
        <Route component={ChatDocs} path="/chat" />
        <Route component={Commerce} path="/commerce" />
        <Route component={Contacts} path="/contacts" />
        <Route component={Dashboard} path="/dashboard" />
        <Route component={Email} path="/email" />
        <Route component={Notes} path="/notes" />
        <Route component={Profile} path="/profile" />
        <Route component={ProjectManager} path="/project-manager" />
      </Switch>
    </Suspense>
  );
}
