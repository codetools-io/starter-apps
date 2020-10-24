import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Docs } from 'internal/components/Docs';

function DocRoute({ component, path, docs, pageProps = {}, ...props }) {
  return (
    <Route path={path} {...props}>
      <Docs component={component} docs={docs} path={path} {...pageProps} />
    </Route>
  );
}

export default function Router({ docs }) {
  const Home = lazy(() => import('./internal/components/Home'));
  const Calendar = lazy(() => import('./features/Calendar'));
  const Chat = lazy(() => import('./features/Chat'));
  const Store = lazy(() => import('./features/Commerce/Store'));
  const Checkout = lazy(() => import('./features/Commerce/Checkout'));
  const Cart = lazy(() => import('./features/Commerce/Cart'));
  const Contacts = lazy(() => import('./features/Contacts'));
  const Dashboard = lazy(() => import('./features/Dashboard'));
  const Email = lazy(() => import('./features/Email'));
  const Notes = lazy(() => import('./features/Notes'));
  const ProjectManager = lazy(() => import('./features/ProjectManager'));
  const Profile = lazy(() => import('./features/SocialMedia/Profile'));
  const Feed = lazy(() => import('./features/SocialMedia/Feed'));
  const AppShell = lazy(() => import('./shells/AppShell'));
  const ImageEditor = lazy(() => import('./features/ImageEditor'));

  return (
    <Suspense fallback={<p>loading route…</p>}>
      <Switch>
        <Route path="/" exact>
          <Home docs={docs} />
        </Route>
        <DocRoute
          docs={docs}
          component={Calendar}
          path={`/features/calendar`}
          pageProps={{
            mainProps: {
              pad: { bottom: 'large' },
            },
          }}
        />
        <DocRoute docs={docs} component={Chat} path={`/features/chat`} />
        <DocRoute
          docs={docs}
          component={Store}
          path={`/features/commerce/store`}
        />
        <DocRoute
          docs={docs}
          component={Checkout}
          path={`/features/commerce/checkout`}
        />
        <DocRoute
          docs={docs}
          component={Cart}
          path={`/features/commerce/cart`}
        />
        <DocRoute
          docs={docs}
          component={Contacts}
          path={`/features/contacts`}
        />
        <DocRoute
          docs={docs}
          component={Dashboard}
          path={`/features/dashboard`}
        />
        <DocRoute docs={docs} component={Email} path={`/features/email`} />
        <DocRoute docs={docs} component={Notes} path={`/features/notes`} />
        <DocRoute
          docs={docs}
          component={Profile}
          path={`/features/social-media/profile`}
        />
        <DocRoute
          docs={docs}
          component={Feed}
          path={`/features/social-media/feed`}
        />
        <DocRoute
          docs={docs}
          component={ProjectManager}
          path={`/features/project-manager`}
        />
        <DocRoute docs={docs} component={AppShell} path={`/shells/app-shell`} />
        <DocRoute
          docs={docs}
          component={ImageEditor}
          path={`/features/image-editor`}
        />
      </Switch>
    </Suspense>
  );
}
