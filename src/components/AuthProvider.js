import { createContext, useState } from "react";
import React from 'react'
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const contextValue = {
        user,
        login(){
            setUser("Edgar");
        },

        logout(){
            setUser(null);
        }
    }

  return  <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
}

export default AuthProvider;