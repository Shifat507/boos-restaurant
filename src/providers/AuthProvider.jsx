import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from '../hooks/useAxiosPublic';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);

    }
    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }
    const userUpdateData = (name, photoURL) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        })
    }
    const provider = new GoogleAuthProvider();
    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    const axiosPublic = useAxiosPublic();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if(currentUser){
                //get token and store client
                const userInfo = {
                    email: currentUser.email
                }
                axiosPublic.post('/jwt', userInfo)
                .then(res => {
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token);
                        setLoading(false);
                    }
                })
                
            }
            else{
                // remove token
                localStorage.removeItem('access-token');
                setLoading(false);
            }

            // console.log(currentUser);
            
        })
        return () => {
            return unsubscribe();
        }
    }, [axiosPublic])
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logout,
        userUpdateData,
        googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;