import React, { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import firebaseApp from "./../Firebase/firebase.config";
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const auth = getAuth(firebaseApp);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvier = new GoogleAuthProvider();

    const successToast = (message) => {
        return toast.success(message);
    };

    const errorToast = (message) => {
        return toast.error(message);
    };

    // Create user with email/pass
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Login
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    // Sign in with google
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvier);
    };

    // Observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const value = {
        createUser,
        user,
        loading,
        successToast,
        errorToast,
        loginUser,
        logOut,
        googleSignIn,
    };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
