import { Home, Ship, User2, Book, Flag, Shield } from "lucide-react";

export const adminNavigationSections = [
  {
    label: "Dashboard",
    items: [{ name: "Overview", href: "overview", icon: Home }],
  },
  {
    label: "Management",
    items: [
      {
        name: "Trip and Ferry",
        href: "trip-management",
        icon: Ship,
      },
      { name: "User", href: "user-management", icon: User2 },
      {
        name: "Booking and Payment",
        href: "booking-payment-management",
        icon: Book,
      },
    ],
  },
  {
    label: "Analytics",
    items: [
      { name: "Reports", href: "reports", icon: Flag },
      {
        name: "Activity Log",
        href: "activity-log",
        icon: Shield,
      },
    ],
  },
];
