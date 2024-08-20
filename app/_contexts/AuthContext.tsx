"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

type AuthState = "authorized" | "not-authorized";

interface AuthContext {
  auth: AuthState;
  setAuth: Dispatch<SetStateAction<AuthState>>;
}

export const AuthContext = createContext<AuthContext | null>(null);

export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [auth, setAuth] = useState<AuthState>("not-authorized");
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("useAuthContext must be used within a AuthContextProvider");
  }

  return context;
}
