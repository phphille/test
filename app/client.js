// Entry point for the browser
// Start your React application and add the required containers
// Here we have <BrowserRouter /> for react-router

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import store, { history } from './store';

import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

const element = document.getElementById('app');
const app = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}></Route>
      <Route path="/view/:postId" component={Single}></Route>
    </Router>
  </Provider>
);

// In production, we want to hydrate instead of render
// because of the server-rendering
if (process.env.NODE_ENV === 'production') {
  ReactDOM.hydrate(app, element);
} else {
  ReactDOM.render(app, element);
}

// Hot reload is that easy with Parcel
if (module.hot) {
  module.hot.accept();
}
