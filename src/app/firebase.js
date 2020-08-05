import Fb, { initializeApp } from 'firebase'

const config = {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
}

const Firebase = Fb.initializeApp(config)

export default Firebase
