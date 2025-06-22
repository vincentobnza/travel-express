import { lazy } from "react";
// import PrivateRoute from "../components/PrivateRoute";

const AdminLayout = lazy(() => import("../layout/admin.layout"));

const AdminDashboard = lazy(() => import("../pages/admin"));
const TripManagement = lazy(() => import("../pages/admin/trip-management"));
const UserManagement = lazy(() => import("../pages/admin/user-management"));
const BookingManagement = lazy(
  () => import("../pages/admin/booking-management"),
);
const Reports = lazy(() => import("../pages/admin/reports"));
const ActivityLog = lazy(() => import("../pages/admin/activity-log"));

// const adminRoutes = [
//   {
//     path: "/admin",
//     element: <PrivateRoute roles={["admin"]} />,
//     children: [
//       {
//         path: "",
//         element: <AdminLayout />,
//         children: [
//           {
//             path: "",
//             element: <AdminDashboard />,
//           },
//         ],
//       },
//     ],
//   },
// ];

const adminRoutes = [
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        path: "overview",
        element: <AdminDashboard />,
      },
      {
        path: "trip-management",
        element: <TripManagement />,
      },
      {
        path: "user-management",
        element: <UserManagement />,
      },
      {
        path: "booking-payment-management",
        element: <BookingManagement />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
      {
        path: "activity-log",
        element: <ActivityLog />,
      },
    ],
  },
];

export default adminRoutes;
