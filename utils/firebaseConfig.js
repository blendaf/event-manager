import 'firebase/firestore'
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: 'AIzaSyDCY5sH7tW-BOMGL7mqgp5UVpDPWbS7Leg',
  authDomain: 'event-manager-8fd3f.firebaseapp.com',
  databaseURL: 'https://event-manager-8fd3f.firebaseio.com',
  projectId: 'event-manager-8fd3f',
  storageBucket: 'event-manager-8fd3f.appspot.com',
  messagingSenderId: '239017610828',
  appId: '1:239017610828:web:4bf94dc39120be89a42ee9',
}

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

export const firebaseAppAuth = firebaseApp.auth()
export const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
}
export const db = firebase.firestore()
