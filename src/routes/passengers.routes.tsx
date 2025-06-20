import { lazy } from "react";
import PassengerLayout from "../layout/passenger.layout";
const PassengerDashboard = lazy(() => import("../pages/passengers/index"));

const passengersRoutes = [
  {
    path: "/dashboard",
    element: <PassengerLayout />,
    children: [
      {
        index: true,
        path: "",
        element: <PassengerDashboard />,
      },
    ],
  },
];

export default passengersRoutes;
