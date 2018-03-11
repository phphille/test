import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import store, {history} from '../shared/store';

import Routes from '../shared/Routes';
import App from '../shared/components/App'

hydrate(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" component={App}>
          <Routes />
        </Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('app')
);

// // In production, we want to hydrate instead of render
// // because of the server-rendering
// if (process.env.NODE_ENV === 'production') {
//   ReactDOM.hydrate(app, element);
// } else {
//   ReactDOM.render(app, element);
// }

// Hot reload is that easy with Parcel
if (module.hot) {
  module.hot.accept();
}
