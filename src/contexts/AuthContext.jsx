import React, { createContext, useContext, useState, ReactNode } from 'react';

const AuthContext = createContext({
    isLoggedIn: false,
    user: null,
    login: (userInfo) => {},
    logout: () => {},
});


export function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null); // State to hold user information

    const login = (userInfo) => {
        setIsLoggedIn(true);
        setUser(userInfo); // Set user information upon login
    };
      const logout = () => {
        setIsLoggedIn(false);
        setUser(null); // Clear user information upon logout
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}