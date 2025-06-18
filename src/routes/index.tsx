import { lazy } from "react";
import passengersRoutes from "./passengers.routes";
import adminRoutes from "./admin.routes";

const LoginPage = lazy(() => import("../pages/LoginPage"));
const SignupPage = lazy(() => import("../pages/SignupPage"));
const UnauthorizedPage = lazy(() => import("../pages/UnauthorizedPage"));

const authRoutes = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/unauthorized",
    element: <UnauthorizedPage />,
  },
];

const allRoutes = [...passengersRoutes, ...adminRoutes, ...authRoutes];

export default allRoutes;
