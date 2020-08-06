import React from 'react'
import './App.css'
import { LoginPage, NotFoundPage, UserListPage, RegisterPage, EditUserPage } from './pages'
import { Router, Switch, Route } from 'react-router-dom'
import { history } from './history'
import { PrivateRoute, AuthProvider } from './components/auth'

export const App = () => {
    return (
        <AuthProvider>
            <Router history={history}>
                <Switch>
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/register" component={RegisterPage} />
                    <PrivateRoute exact path="/" component={UserListPage} />
                    <PrivateRoute exact path="/user/:email" component={EditUserPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </Router>
        </AuthProvider>
    )
}

export default App
