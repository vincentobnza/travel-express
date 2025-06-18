import { lazy } from "react";

const Passengers = lazy(() => import("../pages/passengers/index"));
const PassengerLayout = lazy(() => import("../layout/passenger.layout"));

const passengersRoutes = [
  {
    path: "/",
    element: <PassengerLayout />,
    children: [
      {
        path: "",
        element: <Passengers />,
      },
    ],
  },
];

export default passengersRoutes;
