import { lazy } from "react";
import PassengerLayout from "../layout/passenger.layout";
const PassengerDashboard = lazy(() => import("../pages/passengers/index"));
const Booking = lazy(() => import("../pages/passengers/booking"));
const ReservationList = lazy(
  () => import("../pages/passengers/reservation-list"),
);
const BookingHistory = lazy(
  () => import("../pages/passengers/booking-history"),
);
const MyTickets = lazy(() => import("../pages/passengers/my-ticket"));
const HelpCenter = lazy(() => import("../pages/passengers/help-center"));
const SeatStatus = lazy(() => import("../pages/passengers/seat-status"));

const passengersRoutes = [
  {
    path: "/dashboard",
    element: <PassengerLayout />,
    children: [
      {
        index: true,
        path: "overview",
        element: <PassengerDashboard />,
      },
      {
        path: "booking",
        element: <Booking />,
      },
      {
        path: "reservation-list",
        element: <ReservationList />,
      },
      {
        path: "booking-history",
        element: <BookingHistory />,
      },
      {
        path: "my-ticket",
        element: <MyTickets />,
      },
      {
        path: "help-center",
        element: <HelpCenter />,
      },

      {
        path: "seat-status",
        element: <SeatStatus />,
      },
    ],
  },
];

export default passengersRoutes;
