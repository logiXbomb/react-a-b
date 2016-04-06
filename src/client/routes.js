import React from 'react';
import { Route, IndexRoute } from 'react-router';
import {
  App,
  Dashboard,
  RollingPicker,
} from './components';

const routeTwo = () => (
  <p>waffles</p>
);

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard} />
    <Route path="/picker" component={RollingPicker} />
  </Route>
);
