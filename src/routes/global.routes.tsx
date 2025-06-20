import { lazy } from "react";

const GlobalLayout = lazy(() => import("../layout/global.layout"));
const Homepage = lazy(() => import("../pages/index"));
const TermsAndConditions = lazy(() => import("../pages/TermsAndConditions"));
const AboutUs = lazy(() => import("../pages/AboutUs"));
const ContactUs = lazy(() => import("../pages/ContactUs"));

const globalRoutes = [
  {
    name: "/",
    element: <GlobalLayout />,
    children: [
      {
        name: "",
        element: <Homepage />,
      },
      {
        name: "/terms-and-conditions",
        element: <TermsAndConditions />,
      },
      {
        name: "/about-us",
        element: <AboutUs />,
      },
      {
        name: "/contact-us",
        element: <ContactUs />,
      },
    ],
  },
];

export default globalRoutes;
