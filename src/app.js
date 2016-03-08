import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router,IndexRoute, Route, Link } from 'react-router'

import App from './components/App';
import ItemDisplay from './components/ItemDisplay';
import ItemListDisplay from './components/ItemListDisplay';

render((
  <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={ItemDisplay} />
        <Route path="tech/:techName" component={ItemListDisplay} />
      </Route>
  </Router>
), document.getElementById('root'));
