import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import '@/firebase/config.js'
/* import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCt406fTw1d7WBDBD3t1PenJfK1_R7Ahww",
    authDomain: "happynotes-f8831.firebaseapp.com",
    projectId: "happynotes-f8831",
    storageBucket: "happynotes-f8831.appspot.com",
    messagingSenderId: "1000182661696",
    appId: "1:1000182661696:web:b3389f1fd7104714ba15a5"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

/*const db= firebase.firestore();
const coleccion= db.collection('users'); */


createApp(App).use(store).use(router).mount('#app')
