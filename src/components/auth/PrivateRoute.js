import React, { useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
import firebase from '../../app/firebase'

export const PrivateRoute = ({ component: Component, ...rest }) => {

    const user = firebase.auth().currentUser
    const [isAuthed, setIsAuthed] = useState( user ? user.getIdToken() : '')

    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthed ? (
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
