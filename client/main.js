import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import BinsMain from './components/bins/binsMain';
import BinsList from './components/bins/binsList';
import { Bins } from '../imports/collections/bins';


const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>i
      <IndexRoute component={BinsList} />
      <Route path='bins/:binId' component={BinsMain} />
    </Route>
  </Router>
);

Meteor.startup(() => {
 ReactDOM.render(routes, document.querySelector('.render-target'));
});

