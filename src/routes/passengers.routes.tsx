import { lazy } from "react";

const Passengers = lazy(() => import("../pages/passengers/index"));
const PassengerLayout = lazy(() => import("../layout/passenger.layout"));
const TermsAndConditions = lazy(() => import("../pages/TermsAndConditions"));

const passengersRoutes = [
  {
    path: "/",
    element: <PassengerLayout />,
    children: [
      {
        path: "",
        element: <Passengers />,
      },
      {
        path: "/terms-and-conditions",
        element: <TermsAndConditions />,
      },
    ],
  },
];

export default passengersRoutes;
