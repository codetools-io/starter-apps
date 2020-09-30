import React, { lazy, Suspense } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

export default function Router() {
  const { path } = useRouteMatch();
  const CalendarDocs = lazy(() => import('./Calendar/docs'));
  const ChatDocs = lazy(() => import('./Chat/docs'));
  const StoreDocs = lazy(() => import('./Store/docs'));
  const CheckoutDocs = lazy(() => import('./Checkout/docs'));
  const CartDocs = lazy(() => import('./Cart/docs'));
  const ContactsDocs = lazy(() => import('./Contacts/docs'));
  const DashboardDocs = lazy(() => import('./Dashboard/docs'));
  const EmailDocs = lazy(() => import('./Email/docs'));
  const NotesDocs = lazy(() => import('./Notes/docs'));
  const ProfileDocs = lazy(() => import('./Profile/docs'));
  const ProjectManagerDocs = lazy(() => import('./ProjectManager/docs'));
  const FeedDocs = lazy(() => import('./Feed/docs'));

  return (
    <Suspense fallback={<p>loading app…</p>}>
      <Switch>
        <Route component={CalendarDocs} path={`${path}/calendar`} />
        <Route component={ChatDocs} path={`${path}/chat`} />
        <Route component={StoreDocs} path={`${path}/commerce/store`} />
        <Route component={CheckoutDocs} path={`${path}/commerce/checkout`} />
        <Route component={CartDocs} path={`${path}/commerce/cart`} />
        <Route component={ContactsDocs} path={`${path}/contacts`} />
        <Route component={DashboardDocs} path={`${path}/dashboard`} />
        <Route component={EmailDocs} path={`${path}/email`} />
        <Route component={NotesDocs} path={`${path}/notes`} />
        <Route component={ProfileDocs} path={`${path}/social-media/profile`} />
        <Route component={FeedDocs} path={`${path}/social-media/feed`} />
        <Route
          component={ProjectManagerDocs}
          path={`${path}/project-manager`}
        />
      </Switch>
    </Suspense>
  );
}
