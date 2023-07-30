import { createContext } from "react";

export type AuthContextProps = {
  authState: AuthState;
  registerUser: (user: Register) => void;
  resetError: () => void;
  loginUser: (user: Login) => void;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);