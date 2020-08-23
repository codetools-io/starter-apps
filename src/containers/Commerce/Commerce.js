import React, { lazy, Suspense } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

export default function Router() {
  const Cart = lazy(() => import('./Cart'));
  const Checkout = lazy(() => import('./Checkout'));
  const Shop = lazy(() => import('./Shop'));
  const { path } = useRouteMatch();

  return (
    <Suspense fallback={<p>loading route…</p>}>
      <Switch>
        <Route component={Cart} path={`${path}/cart`} />
        <Route component={Checkout} path={`${path}/checkout`} />
        <Route component={Shop} path={`${path}/shop`} />
      </Switch>
    </Suspense>
  );
}
