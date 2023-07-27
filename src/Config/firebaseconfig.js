/* v9 compat packages */
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBBcQqg3VcwJ9M9myrA4FpIEmJ4T5BSXlo",
    authDomain: "react-crud-a32eb.firebaseapp.com",
    projectId: "react-crud-a32eb",
    storageBucket: "react-crud-a32eb.appspot.com",
    messagingSenderId: "550165001416",
    appId: "1:550165001416:web:181cf55cf403f56af5e1fd",
    measurementId: "G-FJL10J0G3E"
};

const app = firebase.initializeApp(firebaseConfig);

export default Fireapp