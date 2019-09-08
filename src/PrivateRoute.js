import React from "react"

import {Redirect, Route} from "react-router-dom"
import {client} from "./Client"

const PrivateRoute = ({component: Component, ...rest}) => {
  console.log("PrivateRouting", "client:", client.isLoggedIn(), Component)

  return (
    <Route
      {...rest}
      render={props =>
        client.isLoggedIn() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{pathname: "/login", state: {from: props.location}}}
          />
        )
      }
    />
  )
}

const LoginRoute = ({component: Component, ...rest}) => {
  console.log("LoginRouting", "client:", client.isLoggedIn(), Component)

  return (
    <Route
      {...rest}
      render={props =>
        client.isLoggedIn() ? (
          <Redirect
            to={{pathname: "/resume", state: {from: props.location}}}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  )
}

export {PrivateRoute, LoginRoute}
