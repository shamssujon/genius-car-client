import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { createContext, useState } from "react";
import firebaseApp from "./../Firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const auth = getAuth(firebaseApp);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create user with email/pass
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const value = { createUser, user, loading };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
