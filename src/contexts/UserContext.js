import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';
export const AuthContext = createContext()

const auth = getAuth(app)

const UserContext = ({ children }) => {
    const [user, setUser] = useState({})
    const googleProvider = new GoogleAuthProvider();
    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const profileUpdate = name => {
        return updateProfile(auth.currentUser, { displayName: name })
    }
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            return () => unsubscribe()
        })
    }, [])

    const authInfo = { user, signup, profileUpdate, googleLogin, logout, login }

    return (<AuthContext.Provider value={authInfo} >
        {children}
    </AuthContext.Provider>
    );
};

export default UserContext;