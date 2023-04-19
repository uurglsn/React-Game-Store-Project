import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, FacebookAuthProvider , TwitterAuthProvider , OAuthProvider ,  GoogleAuthProvider, signOut, sendPasswordResetEmail, updateProfile, sendEmailVerification, updateEmail, updatePassword, EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth"
import { getFirestore, collection, addDoc } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyDfrx28Y-dUPulV0trzlzCA4CuONA0vcfY",
    authDomain: "gamestore-63a72.firebaseapp.com",
    databaseURL: "https://gamestore-63a72-default-rtdb.firebaseio.com",
    projectId: "gamestore-63a72",
    storageBucket: "gamestore-63a72.appspot.com",
    messagingSenderId: "628436117100",
    appId: "1:628436117100:web:ba73f9b1df094dd639da49",
    measurementId: "G-YE27BELJKV"

};
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider()
export const microsoftProvider = new OAuthProvider('microsoft.com');
export const twitterProvider = new TwitterAuthProvider();
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const firestore = getFirestore(app);
export const register = async (email, password, displayName, nameLastName, birthDate, phoneNumber) => {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);

    await addDoc(collection(firestore, "users"), {
        userId: user.uid,
        displayName,
        nameLastName,
        birthDate,
        phoneNumber,
        email,
    });
    await updateProfile(user, { displayName });
    await sendEmailVerification(user);

    return user;
};

export const login = async (email, password) => {
    const { user } = await signInWithEmailAndPassword(auth, email, password)
    return user
}
export const logout = async () => {
    await signOut(auth)
    return true
}
export const sendResetEmail = async (email) => {
    await sendPasswordResetEmail(auth, email);
};
export const currentEmailVerification = async () => {
    await sendEmailVerification(auth.currentUser)
}
export const update = async (data) => {
    await updateProfile(auth.currentUser, data)
    return true
}
export const updatePass = async (password) => {
    await updatePassword(auth.currentUser, password)
}

export const emailUpdate = async (newEmail) => {
    await updateEmail(auth.currentUser, newEmail)
    await sendEmailVerification(auth.currentUser)

}
export const reAuth = async (password) => {
    const credential = await EmailAuthProvider.credential(auth.currentUser.email, password)
    const { user } = await reauthenticateWithCredential(auth.currentUser, credential)
    return user
}
export default app