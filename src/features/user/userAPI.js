import firebase from '../../app/firebase'

export const callGetUsers = async () => {
    try {
        const usersCollection = await firebase
            .firestore()
            .collection('users')
            .get()
            .catch(function (error) {
                return []
            })
        return usersCollection.docs.map((doc) => doc.data())
    } catch (error) {
        return []
    }
}

export const callGetUser = async ({ email }) => {
    try {
        const user = await firebase
            .firestore()
            .collection('users')
            .doc(email)
            .get()
            .catch(function (error) {
                return {}
            })
        return user.data()
    } catch (error) {
        return {}
    }
}

export const callUpdateUser = async ({ data, email }) => {
    try {
        await firebase
            .firestore()
            .collection('users')
            .doc(email)
            .update({
                ...data,
            })
            .catch(function (error) {
                return false
            })
        return true
    } catch (error) {
        return false
    }
}
