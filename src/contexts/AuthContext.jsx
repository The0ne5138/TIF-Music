import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser, getProfile } from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({ isAuthenticated: false, user: null, token: null });
  const navigate = useNavigate();

  useEffect(() => {
    // Cargar perfil de usuario si hay token
    const token = localStorage.getItem('token');
    if (token) {
      getProfile(token).then(user => {
        setAuthState({ isAuthenticated: true, user, token });
      }).catch(() => {
        setAuthState({ isAuthenticated: false, user: null, token: null });
        navigate('/login');
      });
    }
  }, [navigate]);

  const login = async (username, password) => {
    const { token, user } = await loginUser(username, password);
    localStorage.setItem('token', token);
    setAuthState({ isAuthenticated: true, user, token });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuthState({ isAuthenticated: false, user: null, token: null });
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
