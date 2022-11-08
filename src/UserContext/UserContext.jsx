import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth } from "firebase/auth";

const auth = getAuth(app);
export const AuthContext = createContext();

const UserContext = ({children}) => {
    const [user , setUser] = useState({displayName : 'NOman'});
    const [loading , setLoading] = useState(true);



    const authInfo = {
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
                {children}
        </AuthContext.Provider>
    );
};

export default UserContext;