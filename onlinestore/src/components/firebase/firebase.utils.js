import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyApxrbvpkEnreML2ZNI_5fMGoC65swasJM",
    authDomain: "onlineshop-5996d.firebaseapp.com",
    databaseURL: "https://onlineshop-5996d.firebaseio.com",
    projectId: "onlineshop-5996d",
    storageBucket: "onlineshop-5996d.appspot.com",
    messagingSenderId: "895368334819",
    appId: "1:895368334819:web:e9a90eb6e8160df6c964d6"
  };
  firebase.initializeApp(config);
  export const auth=firebase.auth();
  export const firestore = firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);
  export const createUserProfileDocument = async (userAuth, additionalData) =>{
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    if(!userAuth) return userRef;
    const snapsShot = await userRef.get();
    if (!snapsShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(error){console.log('error creating user', error.message)};
    }
    return userRef;
};
  export default firebase; 