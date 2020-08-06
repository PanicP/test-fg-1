import firebase from '../../app/firebase'
import tempFirebase from '../../app/tempfirebase'

export const callLogIn = async ({ email, password }) => {
    try {
        await firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(function (error) {
                return false
            })
        const user = firebase.auth().currentUser
        if (user) {
            console.log('logged in', await user.getIdToken())
            return true
        }
        return false
    } catch (error) {
        return false
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
            console.log('logged out')
            return true
        }
        return false
    } catch (error) {
        return false
    }
}

export const callSignUp = async ({ data }) => {
    try { 
        await tempFirebase
            .auth()
            .createUserWithEmailAndPassword(data.email, data.password)
            .catch(function (error) {
                console.log(error)
                return false
            })

        await firebase
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
                console.log(error)
                return false
            })

        return true
    } catch (error) {
        return false
    }
}
