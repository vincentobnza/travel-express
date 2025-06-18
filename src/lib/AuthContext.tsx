import { AuthContext } from "./AuthContextObject";
import type { User } from "@supabase/supabase-js";
import { supabase } from "../lib/supabaseClient";
import React, { useEffect, useState, useContext } from "react";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) fetchRole(session.user.id);
      setLoading(false);
    });
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
        if (session?.user) fetchRole(session.user.id);
        else setRole(null);
      }
    );
    return () => listener.subscription.unsubscribe();
  }, []);

  const fetchRole = async (userId: string) => {
    // Assumes a 'profiles' table with a 'role' column
    const { data, error } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", userId)
      .single();
    if (!error && data) setRole(data.role);
    else setRole(null);
  };

  const login = (email: string, password: string) =>
    supabase.auth.signInWithPassword({ email, password });
  const signup = (
    email: string,
    password: string,
    role: string = "passenger"
  ) =>
    supabase.auth.signUp({
      email,
      password,
      options: {
        data: { role },
      },
    });
  const logout = () => supabase.auth.signOut();

  return (
    <AuthContext.Provider
      value={{ user, role, loading, login, signup, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
