import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Route, Link, Redirect, Switch } from 'react-router-dom'
import routesArr from './routesArr'

import NoMatch from './NoMatch'


class Routes extends Component {
  render() {
    return (
      <div>
        {routesArr.map(({ path, exact, component: Component, isIndexRoute, ...rest }) => {
          if(isIndexRoute){
            <IndexRoute key={path} path={path} exact={exact} render={(props) => (
              <Component {...props} {...rest} />
            )} />
          } else {
            <Route key={path} path={path} exact={exact} render={(props) => (
              <Component {...props} {...rest} />
            )} />
          }

        })}
        <Route render={(props) => <NoMatch {...props} /> } />
      </div>
    )
  }
}

export default Routes
