import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { Search, Filter, Download, Calendar, MapPin } from "lucide-react";

// Mock reservation data
const reservations = [
  {
    bookingNo: "CSL001",
    fullName: "Juan Dela Cruz",
    seatNo: "A-12",
    date: "2025-03-15",
  },
  {
    bookingNo: "CSL002",
    fullName: "Maria Santos",
    seatNo: "B-08",
    date: "2025-03-16",
  },
  {
    bookingNo: "CSL003",
    fullName: "Pedro Rodriguez",
    seatNo: "C-05",
    date: "2025-03-18",
  },
  {
    bookingNo: "CSL004",
    fullName: "Ana Garcia",
    seatNo: "A-03",
    date: "2025-03-20",
  },
  {
    bookingNo: "CSL005",
    fullName: "Carlos Mendoza",
    seatNo: "B-15",
    date: "2025-03-22",
  },
];

export default function ReservationList() {
  return (
    <div className="flex w-full flex-col items-start gap-6 rounded-lg border border-zinc-200 bg-white p-8">
      {/* Header Section */}
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold text-zinc-900">
            Reservation List
          </h1>
          <p className="text-sm text-zinc-600">
            Manage and track all your ferry reservations in one place.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="gap-2 rounded">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button variant="outline" size="sm" className="gap-2 rounded">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>
      </div>

      {/* Search Section */}
      <div className="flex w-full items-center gap-4">
        <div className="relative max-w-sm flex-1">
          <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-zinc-500" />
          <input
            type="text"
            placeholder="Search reservations..."
            className="w-full rounded-lg border border-zinc-200 bg-white py-2 pr-4 pl-10 text-sm focus:border-zinc-400 focus:ring-2 focus:ring-zinc-100 focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-2 text-sm text-zinc-600">
          <Calendar className="h-4 w-4" />
          <span>Total: {reservations.length} reservations</span>
        </div>
      </div>

      {/* Table Section */}
      <div className="w-full overflow-hidden rounded-lg border border-zinc-200">
        <Table>
          <TableCaption className="bg-zinc-50 py-3 text-sm text-zinc-600">
            Your recent ferry reservations and booking history.
          </TableCaption>
          <TableHeader>
            <TableRow className="bg-zinc-50 hover:bg-zinc-50">
              <TableHead className="font-semibold text-zinc-900">
                Booking No.
              </TableHead>
              <TableHead className="font-semibold text-zinc-900">
                Full Name
              </TableHead>
              <TableHead className="font-semibold text-zinc-900">
                Seat No.
              </TableHead>
              <TableHead className="text-center font-semibold text-zinc-900">
                Travel Date
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reservations.map((reservation) => (
              <TableRow
                key={reservation.bookingNo}
                className="hover:bg-zinc-50/50"
              >
                <TableCell className="font-bold text-zinc-600">
                  {reservation.bookingNo}
                </TableCell>
                <TableCell>{reservation.fullName}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3 w-3 text-zinc-500" />
                    <span className="font-mono text-sm">
                      {reservation.seatNo}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="flex items-center justify-center text-center">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3 w-3 text-zinc-500" />
                    <span className="text-sm">
                      {new Date(reservation.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
