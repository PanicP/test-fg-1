import firebase from '../../app/firebase'

export const callGetUsers = async () => {
    try {
        const usersCollection = await firebase
            .firestore()
            .collection('users')
            .get()
            .catch(function (error) {
                console.log(error)
                return []
            })
        return usersCollection.docs.map(doc => doc.data())
    } catch (error) {
        return []
    }
}
