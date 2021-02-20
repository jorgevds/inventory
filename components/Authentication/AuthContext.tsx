import { useState, useEffect, createContext, useContext } from "react";
import firebase from "../../config/fire-config";

const AuthContext = createContext<{ loggedIn: firebase.User | null }>({
  loggedIn: null,
});

export function AuthProvider({ children }: any) {
  const [loggedIn, setLoggedIn] = useState<firebase.User | null>(null);

  useEffect(() => {
    return firebase.auth().onIdTokenChanged(async (loggedIn) => {
      if (!loggedIn) {
        setLoggedIn(null);
      } else {
        const token = await loggedIn.getIdToken();
        setLoggedIn(loggedIn);
      }
    });
  }, [loggedIn]);
  return (
    <AuthContext.Provider value={{ loggedIn }}>{children}</AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
