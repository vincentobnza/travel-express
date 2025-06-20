import { lazy } from "react";
const Passengers = lazy(() => import("../pages/passengers/index"));
const PassengerLayout = lazy(() => import("../layout/passenger.layout"));
const TermsAndConditions = lazy(() => import("../pages/TermsAndConditions"));
const AboutUs = lazy(() => import("../pages/AboutUs"));
const ContactUs = lazy(() => import("../pages/ContactUs"));

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
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
  },
];

export default passengersRoutes;
