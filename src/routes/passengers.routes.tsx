import { lazy } from "react";

const Passengers = lazy(() => import("../pages/passengers/index"));

const passengersRoutes = [
  {
    path: "/",
    element: <Passengers />,
  },
];

export default passengersRoutes;
