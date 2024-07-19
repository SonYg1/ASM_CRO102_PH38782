import {getApp, getApp,getApps,initializeApp} from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

let FirebaseApp;
export const getFirebaseApp = () => {
    if(firebaseapp) {
        return firebaseapp
    }
    const firebaseConfig = {
        apiKey: "AIzaSyB8MnqGcqzdf4qnd8Tc88AZZ2JbzsCwhDQ",
        authDomain: "asm-cro102-ph38782.firebaseapp.com",
        projectId: "asm-cro102-ph38782",
        storageBucket: "asm-cro102-ph38782.appspot.com",
        messagingSenderId: "127595309458",
        appId: "1:127595309458:web:30b36087e7c1f0f3d9394b",
        measurementId: "G-GKCN01RC82"
    };
       
    const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

    initializeAuth(app,{
        persistence: getReactNativePersistence(ReactNativeAsyncStorage)
    })

    FirebaseApp = app;

    return app;
      
}


