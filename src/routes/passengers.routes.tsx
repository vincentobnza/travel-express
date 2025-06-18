import { lazy } from "react";
import PrivateRoute from "../components/PrivateRoute";

const Passengers = lazy(() => import("../pages/passengers/index"));
const PassengerLayout = lazy(() => import("../layout/passenger.layout"));

const passengersRoutes = [
  {
    path: "/",
    element: <PrivateRoute roles={["passenger", "admin"]} />,
    children: [
      {
        path: "",
        element: <PassengerLayout />,
        children: [
          {
            path: "",
            element: <Passengers />,
          },
        ],
      },
    ],
  },
];

export default passengersRoutes;
