import type {
  AuthTokenResponsePassword,
  AuthResponse,
  User,
} from "@supabase/supabase-js";
import { createContext } from "react";

export type AuthContextType = {
  user: User | null;
  role: string | null;
  loading: boolean;
  login: (
    email: string,
    password: string
  ) => Promise<AuthTokenResponsePassword>;
  signup: (
    email: string,
    password: string,
    role?: string
  ) => Promise<AuthResponse>;
  logout: () => Promise<{ error: Error | null }>;
};

export const AuthContext = createContext<AuthContextType | null>(null);
