import { getFirebaseApp } from "../firebaseHelper";
import{
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth"

import {child,getDatabase,set,ref } from "firebase/database"

import AsyncStorage from "@react-native-async-storage/async-storage"
import { authenticate } from "../../store/authSlice";

export const signUp  = (fullName,email,password) =>{
    return async (dispatch) => {
        const app = getFirebaseApp();
        const auth = getAuth(app);

        try {
            const result = await createUserWithEmailAndPassword(
                auth,
                emai,
                password
            );
            const { uid,ststTokenManager } = result.user;
            const { accessToken, expirationTime} = ststTokenManager;
            const expiryDate = new Date(expirationTime);

            const useData =  await createUser(fullName,email,uid);

            dispatch(authenticate({token : accessToken,useData}))
            dispatch()
        } catch (error) {
            
        }
    }
}

const createUser = async(fullname,email,userId) => {
    const userData = {
        fullname,
        email,
        userId,
        signUpDate : new Date().toISOString(),
    }

    const dbRef = ref(getDatabase());
    const childRef = child(dbRef,`users/${userId}`)
    await set(childRef,userData);
    return userData;
}

const saveToDataStorage = (token,userId,expiryDate) =>{
    
}