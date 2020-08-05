import Fb from 'firebase'

const config = {
    apiKey: 'AIzaSyBQy-JdIBveDwHEXhJsYom2wdHUudui22w',
    authDomain: 'test-fg-1.firebaseapp.com',
    databaseURL: 'https://test-fg-1.firebaseio.com',
    projectId: 'test-fg-1',
    storageBucket: 'test-fg-1.appspot.com',
    messagingSenderId: '368912346070',
    appId: '1:368912346070:web:d6d2da4653a9f828271277',
    // measurementId: 'G-MR3NQW1FB7'
}

const firebase = Fb.initializeApp(config)

export default firebase