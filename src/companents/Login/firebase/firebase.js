import {initializeApp} from 'firebase/app'
import {getStorage} from 'firebase/storage'

const app = initializeApp({
    apiKey: "AIzaSyATy5X2Yd0P74Lk5D2PkO1imYFnvolMa4I",
    authDomain: "medcart-9a04d.firebaseapp.com",
    projectId: "medcart-9a04d",
    storageBucket: "medcart-9a04d.appspot.com",
    messagingSenderId: "511416426173",
    appId: "1:511416426173:web:6046a10c21a2e63b4fa1d4",
    measurementId: "G-30TK7YMLM6"
})

const storage = getStorage(app)
export default storage;