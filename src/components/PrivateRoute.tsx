import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../lib/useAuth";

type PrivateRouteProps = {
  roles?: string[];
};

const PrivateRoute = ({ roles }: PrivateRouteProps) => {
  const { user, role, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Or a spinner component
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (roles && !roles.includes(role!)) {
    return <Navigate to="/unauthorized" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
