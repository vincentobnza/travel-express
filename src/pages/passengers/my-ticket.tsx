import { Button } from "@/components/ui/button";
import {
  Ship,
  Calendar,
  Clock,
  MapPin,
  User,
  Ticket,
  Download,
  QrCode,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

// Mock ticket data
const tickets = [
  {
    id: "CSL001",
    bookingId: "FER20250314152",
    passengerName: "Juan Dela Cruz",
    departure: "Conception",
    arrival: "Bantayan",
    date: "2025-03-14",
    time: "08:30 AM",
    seatNumber: "A12",
    passengerType: "Regular",
    amount: "₱820.00",
    status: "Confirmed",
    vessel: "MV Sea Lion Masken",
    barcode: "9 578545 203541",
  },
  {
    id: "CSL002",
    bookingId: "FER20250316091",
    passengerName: "Juan Dela Cruz",
    departure: "Bantayan",
    arrival: "Conception",
    date: "2025-03-16",
    time: "02:00 PM",
    seatNumber: "B08",
    passengerType: "Regular",
    amount: "₱820.00",
    status: "Confirmed",
    vessel: "MV Sea Lion Masken",
    barcode: "9 578545 203541",
  },
];

const TicketCard = ({ ticket }: { ticket: (typeof tickets)[0] }) => {
  return (
    <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
      {/* Ticket Header */}
      <div className="bg-gradient-to-r from-zinc-100 to-white px-6 py-4 text-zinc-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Ship className="h-6 w-6" />
            <div>
              <h3 className="font-semibold">Cenamark Shipping Lines</h3>
              <p className="text-xs text-zinc-500">Ferry Ticket</p>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4" />
              <span className="text-sm font-medium">{ticket.status}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Ticket Content */}
      <div className="p-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Left Section - Passenger & Trip Details */}
          <div className="space-y-4 md:col-span-2">
            <div className="mb-4">
              <h4 className="mb-1 text-sm font-medium text-zinc-500">
                Booking ID
              </h4>
              <p className="text-lg font-bold text-zinc-900">
                {ticket.bookingId}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <h4 className="mb-1 text-sm font-medium text-zinc-500">
                  Name Of Passenger
                </h4>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-zinc-400" />
                  <span className="font-medium text-zinc-900">
                    {ticket.passengerName}
                  </span>
                </div>
              </div>

              <div>
                <h4 className="mb-1 text-sm font-medium text-zinc-500">
                  Passenger Type
                </h4>
                <span className="font-medium text-zinc-900">
                  {ticket.passengerType}
                </span>
              </div>
            </div>

            {/* Route Information */}
            <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4">
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <h4 className="text-sm font-medium text-zinc-500">
                    Departure
                  </h4>
                  <div className="mt-1 flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-blue-600" />
                    <span className="font-semibold text-zinc-900">
                      {ticket.departure}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-zinc-400">
                  <div className="h-px w-8 bg-zinc-300"></div>
                  <ArrowRight className="h-4 w-4" />
                  <div className="h-px w-8 bg-zinc-300"></div>
                </div>

                <div className="text-center">
                  <h4 className="text-sm font-medium text-zinc-500">Arrival</h4>
                  <div className="mt-1 flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-emerald-600" />
                    <span className="font-semibold text-zinc-900">
                      {ticket.arrival}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div>
                <h4 className="mb-1 text-sm font-medium text-zinc-500">
                  Date & Time
                </h4>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-zinc-400" />
                    <span className="text-sm font-medium">
                      {new Date(ticket.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-zinc-400" />
                    <span className="text-sm font-medium">{ticket.time}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="mb-1 text-sm font-medium text-zinc-500">
                  Seat Number
                </h4>
                <div className="flex items-center gap-2">
                  <Ticket className="h-4 w-4 text-zinc-400" />
                  <span className="font-mono text-lg font-bold text-zinc-800">
                    {ticket.seatNumber}
                  </span>
                </div>
              </div>

              <div>
                <h4 className="mb-1 text-sm font-medium text-zinc-500">
                  Amount Paid
                </h4>
                <span className="text-lg font-bold text-zinc-800">
                  {ticket.amount}
                </span>
              </div>
            </div>

            <div>
              <h4 className="mb-1 text-sm font-medium text-zinc-500">Vessel</h4>
              <span className="font-medium text-zinc-900">{ticket.vessel}</span>
            </div>
          </div>

          {/* Right Section - Barcode & Actions */}
          <div className="flex flex-col items-center justify-center space-y-4 border-l border-zinc-200 pl-6">
            <div className="text-center">
              <div className="mb-2 flex h-20 w-32 items-center justify-center rounded-lg border-2 border-dashed border-zinc-300 bg-zinc-50">
                <QrCode className="h-12 w-12 text-zinc-400" />
              </div>
              <div className="font-mono text-xs text-zinc-500">
                {ticket.barcode}
              </div>
            </div>

            <Button className="h-12 w-full gap-2 rounded-lg" size="sm">
              <Download className="h-4 w-4" />
              Download
            </Button>
          </div>
        </div>
      </div>

      {/* Ticket Footer */}
      <div className="border-t border-zinc-200 bg-zinc-50 px-6 py-3">
        <p className="text-center text-xs text-zinc-500">
          Please present this ticket at the departure terminal. Keep this ticket
          until the end of your journey.
        </p>
      </div>
    </div>
  );
};

export default function MyTicket() {
  return (
    <div className="flex w-full flex-col items-start gap-6 rounded-lg border border-zinc-200 bg-white p-8">
      {/* Header */}
      <div className="flex w-full items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-zinc-900">My Tickets</h1>
          <p className="text-sm text-zinc-600">
            View and manage your ferry tickets. Download or print your tickets
            for travel.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="gap-2 rounded">
            <Download className="h-4 w-4" />
            Download All
          </Button>
        </div>
      </div>

      {/* Tickets List */}
      <div className="w-full space-y-6">
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>

      {/* Empty State (if no tickets) */}
      {tickets.length === 0 && (
        <div className="flex w-full flex-col items-center justify-center py-12">
          <div className="mb-4 rounded-full bg-zinc-100 p-4">
            <Ticket className="h-8 w-8 text-zinc-400" />
          </div>
          <h3 className="mb-2 text-lg font-medium text-zinc-900">
            No tickets found
          </h3>
          <p className="max-w-md text-center text-sm text-zinc-500">
            You don't have any tickets yet. Book a ferry trip to see your
            tickets here.
          </p>
        </div>
      )}
    </div>
  );
}
