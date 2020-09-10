import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { Card } from 'grommet';
import Layout from './Layout';
import { layout } from './config';
export default function LayoutExplorer() {
  const { path } = useRouteMatch();
  return (
    <Card
      pad="medium"
      gap="large"
      background="white"
      elevation="none"
      border
      fill
    >
      <Switch>
        <Route component={Layout} path={`${path}/:layoutId`} exact />
        <Redirect from={path} to={`${path}/${layout.defaultLayoutId}`} exact />
      </Switch>
    </Card>
  );
}
