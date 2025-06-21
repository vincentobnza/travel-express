import { lazy } from "react";
import PassengerLayout from "../layout/passenger.layout";
const PassengerDashboard = lazy(() => import("../pages/passengers/index"));
const Booking = lazy(() => import("../pages/passengers/booking"));

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
      {
        path: "booking",
        element: <Booking />,
      },
    ],
  },
];

export default passengersRoutes;
