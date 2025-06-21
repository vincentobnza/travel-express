import { BadgeInfo, Home, ListCheck, Ticket, History } from "lucide-react";

export const navigationSections = [
  {
    label: "Dashboard",
    items: [{ name: "Overview", href: "overview", icon: Home }],
  },
  {
    label: "Bookings",
    items: [
      {
        name: "Reservation List",
        href: "reservation-list",
        icon: ListCheck,
      },
      { name: "Booking History", href: "booking-history", icon: History },
      { name: "My Ticket", href: "my-ticket", icon: Ticket },
    ],
  },
  {
    label: "Support",
    items: [{ name: "Help Center", href: "help-center", icon: BadgeInfo }],
  },
];
