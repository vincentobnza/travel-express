import HeaderCard from "@/components/header-card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Search, Calendar, MapPin, Ship, DollarSign } from "lucide-react";

// Mock reservation data with enhanced fields
const reservations = [
  {
    bookingNo: "CSL001",
    fullName: "Juan Dela Cruz",
    seatNo: "A-12",
    date: "2025-03-15",
    status: "Completed",
    route: "Conception → Bantayan",
    amount: "₱820",
    departureTime: "08:30 AM",
  },
  {
    bookingNo: "CSL002",
    fullName: "Maria Santos",
    seatNo: "B-08",
    date: "2025-03-16",
    status: "Completed",
    route: "Bantayan → Conception",
    amount: "₱820",
    departureTime: "02:00 PM",
  },
  {
    bookingNo: "CSL003",
    fullName: "Pedro Rodriguez",
    seatNo: "C-05",
    date: "2025-03-18",
    status: "Completed",
    route: "Conception → Bantayan",
    amount: "₱650",
    departureTime: "10:00 AM",
  },
  {
    bookingNo: "CSL004",
    fullName: "Ana Garcia",
    seatNo: "A-03",
    date: "2025-03-20",
    status: "Cancelled",
    route: "Bantayan → Conception",
    amount: "₱820",
    departureTime: "04:30 PM",
  },
  {
    bookingNo: "CSL005",
    fullName: "Carlos Mendoza",
    seatNo: "B-15",
    date: "2025-03-22",
    status: "Completed",
    route: "Conception → Bantayan",
    amount: "₱656",
    departureTime: "06:00 AM",
  },
];

export default function BookingHistory() {
  return (
    <div className="flex w-full flex-col items-start gap-6 rounded-lg border border-zinc-200 bg-white p-8">
      <HeaderCard
        title="Booking History"
        description="View and manage your complete ferry booking history."
      />
      {/* Search Section */}
      <div className="flex w-full items-center gap-4">
        <div className="relative max-w-sm flex-1">
          <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-zinc-500" />
          <input
            type="text"
            placeholder="Search booking history..."
            className="w-full rounded-lg border border-zinc-200 bg-white py-2 pr-4 pl-10 text-sm focus:border-zinc-400 focus:ring-2 focus:ring-zinc-100 focus:outline-none"
          />
        </div>
      </div>{" "}
      {/* Table Section */}
      <div className="w-full overflow-hidden rounded-lg border border-zinc-200">
        <Table>
          <TableCaption className="bg-zinc-50 py-3 text-sm text-zinc-600">
            Your complete ferry booking history and travel records.
          </TableCaption>
          <TableHeader>
            <TableRow className="bg-zinc-50 hover:bg-zinc-50">
              <TableHead className="font-semibold text-zinc-900">
                Booking No.
              </TableHead>
              <TableHead className="font-semibold text-zinc-900">
                Passenger
              </TableHead>
              <TableHead className="font-semibold text-zinc-900">
                Route
              </TableHead>
              <TableHead className="font-semibold text-zinc-900">
                Seat No.
              </TableHead>
              <TableHead className="font-semibold text-zinc-900">
                Travel Date
              </TableHead>
              <TableHead className="font-semibold text-zinc-900">
                Amount
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reservations.map((reservation) => (
              <TableRow
                key={reservation.bookingNo}
                className="hover:bg-zinc-50/50"
              >
                <TableCell className="font-medium text-zinc-600">
                  {reservation.bookingNo}
                </TableCell>
                <TableCell className="font-medium">
                  {reservation.fullName}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Ship className="h-3 w-3 text-blue-500" />
                    <span className="text-sm">{reservation.route}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3 w-3 text-zinc-500" />
                    <span className="font-mono text-sm">
                      {reservation.seatNo}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3 w-3 text-zinc-500" />
                      <span className="text-sm">
                        {new Date(reservation.date).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          },
                        )}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1 text-amber-500">
                    <DollarSign className="h-3 w-3" />
                    <span className="font-semibold">{reservation.amount}</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}{" "}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
