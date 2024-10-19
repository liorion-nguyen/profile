import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const AuthContext = createContext<any>(null);
export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser)); 
        }
      } catch (error) {
        console.error('Failed to load user', error);
      }
    };
    loadUser();
  }, []); 

  const login = (userData: any) => {
    setUser(userData);
    storeUser(JSON.stringify(userData));
  };
  const logout = () => {
    setUser(null); 
    AsyncStorage.removeItem('user'); 
  };

  const storeUser = async (user: any) => {
    try {
      await AsyncStorage.setItem('user', user);
    } catch (error) {
      console.error('Failed to save token', error);
    }
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
