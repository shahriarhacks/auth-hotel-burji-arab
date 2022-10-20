import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';
export const AuthContext = createContext()

const auth = getAuth(app)

const UserContext = ({ children }) => {
    const [user, setUser] = useState('')

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const profileUpdate = name => {
        return updateProfile(auth.currentUser, { displayName: name })
    }
    const authInfo = { user, signup, profileUpdate }

    return (<AuthContext.Provider value={authInfo} >
        {children}
    </AuthContext.Provider>
    );
};

export default UserContext;