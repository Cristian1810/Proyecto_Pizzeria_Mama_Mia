import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [email, setEmail] = useState(localStorage.getItem('email'));
  const [profile, setProfile] = useState(null);

  const login = async (credentials) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', credentials);
      const { token, email } = response.data;
      setToken(token);
      setEmail(email);
      localStorage.setItem('token', token);
    } catch (error) {
      console.error('Error durante el inicio de sesión:', error);
    }
  };

  const register = async (userData) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', userData);
      const { token, email } = response.data;
      setToken(token);
      setEmail(email);
      localStorage.setItem('token', token);
    } catch (error) {
      console.error('Error durante el registro:', error);
    }
  };

  const getProfile = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/auth/me', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setProfile(response.data);
    } catch (error) {
      console.error('Error al obtener el perfil:', error);
    }
  };

  const logout = () => {
    setToken(null);
    setEmail(null);
    setProfile(null);
    localStorage.removeItem('token');
    localStorage.removeItem('email');
  };

  return (
    <UserContext.Provider value={{ token, email, profile, login, register, getProfile, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);