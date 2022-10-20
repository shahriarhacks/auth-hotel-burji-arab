import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';
export const AuthContext = createContext()

const auth = getAuth(app)

const UserContext = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading,setLoading]=useState(true)
    const googleProvider = new GoogleAuthProvider();
    const signup = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const profileUpdate = name => {
        setLoading(true)
        return updateProfile(auth.currentUser, { displayName: name })
    }
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
            return () => unsubscribe()
        })
    }, [])

    const authInfo = { user, signup, profileUpdate, googleLogin, logout, login,loading }

    return (<AuthContext.Provider value={authInfo} >
        {children}
    </AuthContext.Provider>
    );
};

export default UserContext;