import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore/lite';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCt406fTw1d7WBDBD3t1PenJfK1_R7Ahww",
    authDomain: "happynotes-f8831.firebaseapp.com",
    projectId: "happynotes-f8831",
    storageBucket: "happynotes-f8831.appspot.com",
    messagingSenderId: "1000182661696",
    appId: "1:1000182661696:web:b3389f1fd7104714ba15a5"
  };
  
const app = initializeApp(firebaseConfig); 
export const db = getFirestore(app);
console.log(db);
//probando
//export default app.firestore();hi