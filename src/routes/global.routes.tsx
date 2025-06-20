import { lazy } from "react";

const GlobalLayout = lazy(() => import("../layout/global.layout"));
const Homepage = lazy(() => import("../pages/index"));
const TermsAndConditions = lazy(() => import("../pages/TermsAndConditions"));
const AboutUs = lazy(() => import("../pages/AboutUs"));
const ContactUs = lazy(() => import("../pages/ContactUs"));

const globalRoutes = [
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      {
        index: true,
        path: "",
        element: <Homepage />,
      },
      {
        path: "terms-and-conditions",
        element: <TermsAndConditions />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
    ],
  },
];

export default globalRoutes;
