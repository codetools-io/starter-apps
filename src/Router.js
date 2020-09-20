import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

export default function Router() {
  const AppShellDocs = lazy(() => import('./apps/AppShell/docs'));
  const CalendarDocs = lazy(() => import('./apps/Calendar/docs'));
  const ChatDocs = lazy(() => import('./apps/Chat/docs'));
  const StoreDocs = lazy(() => import('./apps/Commerce/Store/docs'));
  const CheckoutDocs = lazy(() => import('./apps/Commerce/Checkout/docs'));
  const CartDocs = lazy(() => import('./apps/Commerce/Cart/docs'));
  const ContactsDocs = lazy(() => import('./apps/Contacts/docs'));
  const DashboardDocs = lazy(() => import('./apps/Dashboard/docs'));
  const EmailDocs = lazy(() => import('./apps/Email/docs'));
  const Notes = lazy(() => import('./apps/Notes'));
  const Profile = lazy(() => import('./apps/Profile'));
  const ProjectManager = lazy(() => import('./apps/ProjectManager'));

  return (
    <Suspense fallback={<p>loading route…</p>}>
      <Switch>
        <Route path="/" exact />

        <Route component={AppShellDocs} path="/app-shell" />
        <Route component={CalendarDocs} path="/calendar" />
        <Route component={ChatDocs} path="/chat" />
        <Route component={StoreDocs} path="/commerce/store" />
        <Route component={CheckoutDocs} path="/commerce/checkout" />
        <Route component={CartDocs} path="/commerce/cart" />
        <Route component={ContactsDocs} path="/contacts" />
        <Route component={DashboardDocs} path="/dashboard" />
        <Route component={EmailDocs} path="/email" />
        <Route component={Notes} path="/notes" />
        <Route component={Profile} path="/profile" />
        <Route component={ProjectManager} path="/project-manager" />
      </Switch>
    </Suspense>
  );
}
