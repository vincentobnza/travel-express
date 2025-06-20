import { lazy } from "react";

const LoginPage = lazy(() => import("../pages/LoginPage"));
const SignupPage = lazy(() => import("../pages/SignupPage"));
const UnauthorizedPage = lazy(() => import("../pages/UnauthorizedPage"));
const authRoutes = [
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "signup",
    element: <SignupPage />,
  },
  {
    path: "unauthorized",
    element: <UnauthorizedPage />,
  },
];

export default authRoutes;
