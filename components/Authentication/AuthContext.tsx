import app from '@fire-config';
import { getAuth, User } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';

import { LoadingUser } from './LoadingUser';

const AuthContext = createContext<{ loggedIn: User | null }>({
    loggedIn: null,
});

export function AuthProvider({ children }: any) {
    if (!app) return null;

    const [loggedIn, setLoggedIn] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        return getAuth().onIdTokenChanged(async (loggedIn: User | null) => {
            loggedIn ? setLoggedIn(loggedIn) : setLoggedIn(null);
            setLoading(false);
        });
    }, [loggedIn]);

    return (
        <AuthContext.Provider value={{ loggedIn }}>
            <LoadingUser loading={loading}>{children}</LoadingUser>
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
};
