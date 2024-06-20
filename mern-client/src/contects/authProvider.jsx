import React, { createContext, useState, useEffect } from 'react';

// Create a context object
const authContext = createContext();

// Create a provider component
const AuthProvider = ({ children }) => {
  // State to hold the user object
  const [user, setUser] = useState(null);

  // Effect to check if the user is already logged in
  useEffect(() => {
    const token = localStorage.getItem('jsonwebtoken');
    // Check if token exists
    if (token) {
      // Set the user object using the token
      // Here, you may want to validate the token and fetch user data from the server
      setUser({ token });
    }
  }, []);

  // Function to login the user
  const login = (token, email) => {
    // Save token in localStorage
    localStorage.setItem('jsonwebtoken', token);
    // Set the user object
    setUser({ email, token });
  };

  // Function to logout the user
  const logout = () => {
    // Remove token from localStorage
    localStorage.removeItem('jsonwebtoken');
    // Clear the user object
    setUser(null);
  };

  // Value to be provided by the context
  const authContextValue = {
    user,
    login,
    logout,
  };

  // Provide the context value to the children components
  return (
    <authContext.Provider value={authContextValue}>
      {children}
    </authContext.Provider>
  );
};

export { authContext, AuthProvider };
