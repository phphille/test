import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Route, Link, Redirect, Switch } from 'react-router-dom'
import routes from './routes'

import NoMatch from './NoMatch'


class Index extends Component {
  render() {
    return (
      <Switch>
        {routes.map(({ path, exact, component: Component, ...rest }) => (
            <Route key={path} path={path} exact={exact} render={(props) => (
              <Component {...props} {...rest} />
            )} />
        ))}
        <Route render={(props) => <NoMatch {...props} /> } />
      </Switch>
    )
  }
}

export default Index
