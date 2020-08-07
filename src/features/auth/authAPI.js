import firebase from '../../app/firebase'
import tempFirebase from '../../app/tempfirebase'

export const callLogIn = async ({ email, password }) => {
    try {
        const error = await firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(function (error) {
                console.log(false, error.message)
                return error.message
            })
        const user = firebase.auth().currentUser
        if (user) {
            return { isLoginSucceeded: true, error: '' }
        } else {
            return { isLoginSucceeded: false, error }
        }
    } catch (error) {
        return { isLoginSucceeded: false, error: error.message }
    }
}

export const callLogOut = async () => {
    try {
        await firebase
            .auth()
            .signOut()
            .catch(function (error) {
                return false
            })
        const user = firebase.auth().currentUser
        if (!user) {
            return true
        } else {
            return false
        }
    } catch (error) {
        return false
    }
}

export const callSignUp = async ({ data }) => {
    try {
        const errorAuth = await tempFirebase
            .auth()
            .createUserWithEmailAndPassword(data.email, data.password)
            .catch(function (error) {
                return error.message
            })

        const errorDB = await firebase
            .firestore()
            .collection('users')
            .doc(data.email)
            .set({
                address: data.address,
                age: data.age,
                district: data.district,
                email: data.email,
                firstName: data.firstName,
                lastName: data.lastName,
                phoneNumber: data.phoneNumber,
                phoneCode: data.phoneCode,
                postalCode: data.postalCode,
                province: data.province,
                subDistrict: data.subDistrict,
                title: data.title,
            })
            .catch(function (error) {
                return error.message
            })

        if (typeof errorAuth !== 'string' && typeof errorDB !== 'string') {
            console.log(1)
            return { isSignUpSucceeded: true, error: '' }
        } else if (typeof errorAuth === 'string') {
            console.log(2)
            return { isSignUpSucceeded: false, error: errorAuth }
        } else if (typeof errorDB === 'string') {
            console.log(3)
            return { isSignUpSucceeded: false, error: errorDB }
        } else {
            console.log(4)
            return { isSignUpSucceeded: false, error: 'There is something wrong!' }
        }
    } catch (error) {
        return { isSignUpSucceeded: false, error: error.message }
    }
}
