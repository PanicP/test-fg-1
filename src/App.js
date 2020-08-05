import React from 'react'
import './App.css'
import { LoginPage } from './pages'
import { Router, Switch, Route } from 'react-router-dom'
import { history } from './history'

export const App = () => {
    return (
      <Router history={history}>
      <Switch>
          <Route exact path="/" component={LoginPage} />
      </Switch>
  </Router>
    )
}

export default App
