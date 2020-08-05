import axios from 'axios'
import firebase from '../../app/firebase'
import { useForm } from 'antd/lib/form/Form'

export const callLogIn = async ({ email, password }) => {
    try {
        await firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(function (error) {
                var errorCode = error.code
                var errorMessage = error.errorMessage
                console.log(errorCode, errorMessage)
            })
        const user = firebase.auth().currentUser
        if (user) {
            console.log('logged in', await user.getIdToken())
            // localStorage.setItem('token', user.getIdToken())
            return true
        }
        return false
        // //test sign out
        // await firebase.auth().signOut().then(function() {
        //     // Sign-out successful.
        //   }).catch(function(error) {
        //     // An error happened.
        //   })
    } catch (error) {
        return false
    }
}

export const callLogOut = async () => {
    try {
        // //test sign out
        console.log('1')
        await firebase
            .auth()
            .signOut()
            .catch(function (error) {
                return false
            })
            console.log('2')
        const user = firebase.auth().currentUser
        console.log('3')
        if (!user) {
            console.log('logged out')
            return true
        }
        console.log('!user')
        return false
    } catch (error) {
        return false
    }
}
