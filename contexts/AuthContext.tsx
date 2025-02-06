import React from 'react';
import { createContext, useContext, useEffect, useState, type PropsWithChildren } from 'react';

interface LoginProps {
  username: string;
  password: string;
}

interface AuthProps {
  isLoggedIn: boolean;
  onLogin: ({ username, password }: LoginProps) => {success?: boolean; message?: string;} | void;
  onLogout: () => Object | void;
}

const STORAGE_KEY = 'sample-logged-in';

const AuthContext = createContext<AuthProps>({
  isLoggedIn: false,
  onLogin: () => {
    console.log('Function should not be called outside of its context');
  },
  onLogout: () => {
    console.log('Function should not be called outside of its context');
  },
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const init = () => {
    const loggedIn = localStorage.getItem(STORAGE_KEY);
    setLoggedIn(() => loggedIn === 'true');
  };

  useEffect(() => {
    init();
  }, []);

  const onLogin = ({ username, password }: LoginProps) => {
    if (username === 'nazim' && password == 'abcd1234') {
      setLoggedIn(true);
      return { success: true };
    } else {
      return { message: 'Invalid Creds' };
    }
  };

  const onLogout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setLoggedIn(false);
  };

  const value = {
    isLoggedIn,
    onLogin,
    onLogout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
