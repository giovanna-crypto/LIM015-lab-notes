/*import 'firebase/auth'

export const validationEmail = () => firebase.auth().currentUser.sendEmailVerification();

/* **********Función para registrar usuario********** */
// eslint-disable-next-line max-len
//export const loginUser = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

/* **********Función para registrar usuario********** */
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
export const registerUser = (email, password) => {
const auth = getAuth();
return createUserWithEmailAndPassword(auth, email, password)
  /*.then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });*/
}

/***********Función login ***********/
export const loginUser = (email, password) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
  }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
  })
  }
/* **********Función iniciar sesión con google********** */
/*export const loginGoogle = () => {
  // eslint-disable-next-line max-len
  const providerGoogle = new firebase.auth.GoogleAuthProvider();

  const loginwithGoogle = firebase.auth()
    .signInWithPopup(providerGoogle);// popup para seleccionar cuenta google
  return loginwithGoogle;
};

/* **********Función para cerrar sesión con google********** */
/*export const logOut = () => {
  firebase.auth().signOut();
};

export const userSessionActive = (callback) => firebase.auth().onAuthStateChanged(callback);

/** *****Para subir imagen************************** */
/*export const uploadImage = (imgFile, directory) => {
  const storageRef = firebase.storage().ref(`${directory}/${imgFile.name}`);
  return storageRef.put(imgFile);
};
// -------- FUNCIÓN QUE CONTIENE INFORMACIÓN EN UN OBJETO DEL CURRENT USER --------//
export const getCurrentUser = () => {
  const user = firebase.auth().currentUser;
  let dataUser = '';
  if (user !== null) {
    dataUser = {
      name: user.displayName,
      photo: user.photoURL,
      uid: user.uid,
      email: user.email,
    };
  }
  return dataUser;
};
/** *obtener Fecha */

/*export const getDate = (timeStamp) => {
  const d = new Date(timeStamp);
  let month = `${d.getMonth() + 1}`;
  let day = `${d.getDate()}`;
  const year = d.getFullYear();

  if (month.length < 2) month = `0${month}`;
  if (day.length < 2) day = `0${day}`;

  return [day, month, year].join('/');
};
*/