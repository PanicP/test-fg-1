import React from 'react'
import './App.css'
import { LoginPage, NotFoundPage, UserListPage } from './pages'
import { Router, Switch, Route } from 'react-router-dom'
import { history } from './history'
import { PrivateRoute } from './components/auth'

export const App = () => {
    return (
      <Router history={history}>
      <Switch>
          <Route exact path="/login" component={LoginPage} />
          <PrivateRoute exact path="/" component={UserListPage} />
          <Route component={NotFoundPage} />
      </Switch>
  </Router>
    )
}

export default App
