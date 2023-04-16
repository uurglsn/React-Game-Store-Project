import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut  , updateProfile} from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyDfrx28Y-dUPulV0trzlzCA4CuONA0vcfY",
    authDomain: "gamestore-63a72.firebaseapp.com",
    projectId: "gamestore-63a72",
    storageBucket: "gamestore-63a72.appspot.com",
    messagingSenderId: "628436117100",
    appId: "1:628436117100:web:ba73f9b1df094dd639da49"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth()
export const register = async (email, password, name) => {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(user, { displayName: name });
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
export default app