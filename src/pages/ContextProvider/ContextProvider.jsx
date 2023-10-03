import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from "../Firebase/Firebase";
export const AuthContext = createContext(null)
const auth = getAuth(app)
const ContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loding, setLoding] = useState(true)
    const createUser = (email, pass)=>{
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, pass)
    }
    const loginUser = (email, pass)=>{
        setLoding(true)
       return signInWithEmailAndPassword(auth, email, pass)
    }
    const forgotPassword = email =>{
        return sendPasswordResetEmail(auth, email)
    }
    const logOutUser = ()=>{
        setLoding(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currend =>{
            setUser(currend)
            setLoding(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])
    const authInfo = {
        user,
        createUser,
        loginUser,
        forgotPassword,
        loding,
        logOutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;