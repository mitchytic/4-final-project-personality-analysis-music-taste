import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext({
    isLoggedIn: false,
    user: null,
    login: (userInfo) => {},
    logout: () => {},
});


export function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null); // State to hold user information
    const [token, setToken] = useState(null); //Hold token

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const storedUser = localStorage.getItem('user');
        
        if (storedToken && storedUser) {
            setIsLoggedIn(true);
            setToken(storedToken);
            setUser(JSON.parse(storedUser)); // Parse the stringified user object
        }
    }, []);

    const login = (userInfo, theToken) => {
        setIsLoggedIn(true);
        setUser(userInfo); // Set user information upon login
        setToken(theToken); // Token as well
        localStorage.setItem('token', theToken);
        localStorage.setItem('user', JSON.stringify(userInfo));
    };
      const logout = () => {
        setIsLoggedIn(false);
        setUser(null); // Clear user information upon logout
        setToken(null); // Clear token
        localStorage.removeItem('token');
        localStorage.removeItem('user');
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