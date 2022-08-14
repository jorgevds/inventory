import app from '@fire-config';
import { getAuth, User } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext<{ loggedIn: User | null }>({
    loggedIn: null,
});

export function AuthProvider({ children }: any) {
    if (!app) return null;

    const [loggedIn, setLoggedIn] = useState<User | null>(null);

    useEffect(() => {
        return getAuth().onIdTokenChanged(async (loggedIn: User | null) => {
            if (!loggedIn) {
                setLoggedIn(null);
            } else {
                const token = await loggedIn.getIdToken();
                setLoggedIn(loggedIn);
            }
        });
    }, [loggedIn]);
    return (
        <AuthContext.Provider value={{ loggedIn }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
};
