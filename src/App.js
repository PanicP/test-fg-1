import React from 'react'
import './App.css'
import { LoginPage, NotFoundPage, UserListPage, RegisterPage, EditProfilePage } from './pages'
import { Router, Switch, Route } from 'react-router-dom'
import { history } from './history'
import { PrivateRoute, AuthProvider } from './components/auth'

export const App = () => {
    return (
        <AuthProvider>
            <Router history={history}>
                <Switch>
                    <Route exact path="/login" component={LoginPage} />
                    <PrivateRoute exact path="/" component={UserListPage} />
                    <PrivateRoute exact path="/register" component={RegisterPage} />
                    <PrivateRoute exact path="/profile/:uid" component={EditProfilePage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </Router>
        </AuthProvider>
    )
}

export default App
