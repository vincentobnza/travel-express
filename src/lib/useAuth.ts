import { useContext } from "react";
import { AuthContext } from "./AuthContextObject";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
