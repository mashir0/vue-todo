import Vue from "vue";

import { firestorePlugin } from 'vuefire'
Vue.use(firestorePlugin)

import * as firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyClqR67ywD2JriFnHHl8PKiOLPI2aSzcDY",
  authDomain: "mytodo-9e3ff.firebaseapp.com",
  databaseURL: "https://mytodo-9e3ff.firebaseio.com",
  projectId: "mytodo-9e3ff",
  storageBucket: "mytodo-9e3ff.appspot.com",
  messagingSenderId: "885925433716",
  appId: "1:885925433716:web:8e105d806e0f3339c59c21",
  measurementId: "G-WSDKYC40HY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
export const firestore = firebase.firestore
export const db = firebaseApp.firestore()
export const auth = firebaseApp.auth()
// export const storage = firebaseApp.storage()
