import { lazy } from "react";
import PrivateRoute from "../components/PrivateRoute";

const AdminDashboard = lazy(() => import("../pages/admin"));
const AdminLayout = lazy(() => import("../layout/admin.layout"));

const adminRoutes = [
  {
    path: "/admin",
    element: <PrivateRoute roles={["admin"]} />,
    children: [
      {
        path: "",
        element: <AdminLayout />,
        children: [
          {
            path: "",
            element: <AdminDashboard />,
          },
        ],
      },
    ],
  },
];

export default adminRoutes;
