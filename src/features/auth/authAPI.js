import axios from 'axios'
import firebase from '../../app/firebase'

export const callAuth = async () => {
    try {
        await firebase
            .auth()
            .signInWithEmailAndPassword('panicp@gmail.com', 'panicpoggers')
            .catch(function (error) {
                var errorCode = error.code
                var errorMessage = error.errorMessage
                console.log(errorCode, errorMessage)
            })
        var user = firebase.auth().currentUser
        if (user) {
            console.log('1')
            console.log(user)
            // User is signed in.
        } else {
            console.log('2')
            // No user is signed in.
        }
        // const res = await axios.post(

        //     'https://42a3c039-1cf6-4bd8-b159-07129942aa50.mock.pstmn.io/auth'
        // )
        // if (res) {
        //     // localStorage.setItem('authToken', res.data.token)
        //     return true
        // }
    } catch (error) {
        return false
    }
}
