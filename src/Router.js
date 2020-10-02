import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { DocsPage } from 'internal/components/Docs';

function DocRoute({ component, path, site }) {
  return (
    <Route path={path}>
      <DocsPage component={component} site={site} path={path} />
    </Route>
  );
}

export default function Router({ site }) {
  const Home = lazy(() => import('./internal/components/Home'));
  const Calendar = lazy(() => import('./apps/Calendar'));
  const Chat = lazy(() => import('./apps/Chat'));
  const Store = lazy(() => import('./apps/Store'));
  const Checkout = lazy(() => import('./apps/Checkout'));
  const Cart = lazy(() => import('./apps/Cart'));
  const Contacts = lazy(() => import('./apps/Contacts'));
  const Dashboard = lazy(() => import('./apps/Dashboard'));
  const Email = lazy(() => import('./apps/Email'));
  const Notes = lazy(() => import('./apps/Notes'));
  const Profile = lazy(() => import('./apps/Profile'));
  const ProjectManager = lazy(() => import('./apps/ProjectManager'));
  const Feed = lazy(() => import('./apps/Feed'));
  const AppShell = lazy(() => import('./shells/AppShell'));

  return (
    <Suspense fallback={<p>loading route…</p>}>
      <Switch>
        <Route path="/" exact>
          <Home site={site} />
        </Route>
        <DocRoute site={site} component={Calendar} path={`/apps/calendar`} />
        <DocRoute site={site} component={Chat} path={`/apps/chat`} />
        <DocRoute site={site} component={Store} path={`/apps/commerce/store`} />
        <DocRoute
          site={site}
          component={Checkout}
          path={`/apps/commerce/checkout`}
        />
        <DocRoute site={site} component={Cart} path={`/apps/commerce/cart`} />
        <DocRoute site={site} component={Contacts} path={`/apps/contacts`} />
        <DocRoute site={site} component={Dashboard} path={`/apps/dashboard`} />
        <DocRoute site={site} component={Email} path={`/apps/email`} />
        <DocRoute site={site} component={Notes} path={`/apps/notes`} />
        <DocRoute
          site={site}
          component={Profile}
          path={`/apps/social-media/profile`}
        />
        <DocRoute
          site={site}
          component={Feed}
          path={`/apps/social-media/feed`}
        />
        <DocRoute
          site={site}
          component={ProjectManager}
          path={`/apps/project-manager`}
        />
        <DocRoute site={site} component={AppShell} path={`/shells/app-shell`} />
      </Switch>
    </Suspense>
  );
}
