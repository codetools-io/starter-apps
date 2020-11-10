import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { DocsRoute } from 'internal/components/Docs';
export default function Router({ docs, bookmarks, onBookmark }) {
  const Home = lazy(() => import('./internal/pages/Home'));
  const About = lazy(() => import('./internal/pages/About'));
  const Bookmarks = lazy(() => import('./internal/pages/Bookmarks'));
  const Contact = lazy(() => import('./internal/pages/Contact'));
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
  const PinBoard = lazy(() => import('./features/PinBoard'));

  return (
    <Suspense fallback={<p>loading route…</p>}>
      <Switch>
        <Route path="/" exact>
          <Home docs={docs} bookmarks={bookmarks} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/bookmarks">
          <Bookmarks docs={docs} bookmarks={bookmarks} />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <DocsRoute
          docs={docs}
          bookmarks={bookmarks}
          onBookmark={onBookmark}
          component={Calendar}
          path={`/features/calendar`}
          pageProps={{
            mainProps: {
              pad: { bottom: 'large' },
            },
          }}
        />
        <DocsRoute
          docs={docs}
          bookmarks={bookmarks}
          onBookmark={onBookmark}
          component={Chat}
          path={`/features/chat`}
        />
        <DocsRoute
          docs={docs}
          bookmarks={bookmarks}
          onBookmark={onBookmark}
          component={Store}
          path={`/features/commerce/store`}
        />
        <DocsRoute
          docs={docs}
          bookmarks={bookmarks}
          onBookmark={onBookmark}
          component={Checkout}
          path={`/features/commerce/checkout`}
        />
        <DocsRoute
          docs={docs}
          bookmarks={bookmarks}
          onBookmark={onBookmark}
          component={Cart}
          path={`/features/commerce/cart`}
        />
        <DocsRoute
          docs={docs}
          bookmarks={bookmarks}
          onBookmark={onBookmark}
          component={Contacts}
          path={`/features/contacts`}
        />
        <DocsRoute
          docs={docs}
          bookmarks={bookmarks}
          onBookmark={onBookmark}
          component={Dashboard}
          path={`/features/dashboard`}
        />
        <DocsRoute
          docs={docs}
          bookmarks={bookmarks}
          onBookmark={onBookmark}
          component={Email}
          path={`/features/email`}
        />
        <DocsRoute
          docs={docs}
          bookmarks={bookmarks}
          onBookmark={onBookmark}
          component={Notes}
          path={`/features/notes`}
        />
        <DocsRoute
          docs={docs}
          bookmarks={bookmarks}
          onBookmark={onBookmark}
          component={Profile}
          path={`/features/social-media/profile`}
        />
        <DocsRoute
          docs={docs}
          bookmarks={bookmarks}
          onBookmark={onBookmark}
          component={Feed}
          path={`/features/social-media/feed`}
        />
        <DocsRoute
          docs={docs}
          bookmarks={bookmarks}
          onBookmark={onBookmark}
          component={ProjectManager}
          path={`/features/project-manager`}
        />
        <DocsRoute
          docs={docs}
          bookmarks={bookmarks}
          onBookmark={onBookmark}
          component={AppShell}
          path={`/shells/app-shell`}
        />
        <DocsRoute
          docs={docs}
          bookmarks={bookmarks}
          onBookmark={onBookmark}
          component={ImageEditor}
          path={`/features/image-editor`}
        />
        <DocsRoute
          docs={docs}
          bookmarks={bookmarks}
          onBookmark={onBookmark}
          component={PinBoard}
          path={`/features/pin-board`}
        />
      </Switch>
    </Suspense>
  );
}
