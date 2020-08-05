import React, { useState, useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import firebase from '../../app/firebase'
import { AuthContext } from './AuthProvider'

export const PrivateRoute = ({ component: Component, ...rest }) => {
    const { currentUser } = useContext(AuthContext)
    // const user = firebase.auth().currentUser
    // const [isAuthed, setIsAuthed] = useState( user ? user.getIdToken() : '')

    return (
        <Route
            {...rest}
            render={(props) =>
                !!currentUser ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: props.location },
                        }}
                    />
                )
            }
        />
    )
}
