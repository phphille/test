import React, { Component } from 'react'
import routes from './routes'
import { Route, Link, Redirect, Switch } from 'react-router-dom'
import NoMatch from './NoMatch'

import store, { history } from '../shared/store';

import App from '../shared/components/App';
import Single from '../shared/components/Single';


class Index extends Component {
  render() {
    return (
      <Provider store={store}>
        <Switch>
          {routes.map(({ path, exact, component: Component, ...rest }) => (
              <Route key={path} path={path} exact={exact} render={(props) => (
                <Component {...props} {...rest} />
              )} />
          ))}
          <Route render={(props) => <NoMatch {...props} /> } />
        </Switch>
      </Provider>
    )
  }
}

//<Route path="/" component={App}></Route>
//<Route path="/view/:postId" component={Single}></Route>

export default Index
