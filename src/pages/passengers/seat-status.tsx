import HeaderCard from "@/components/header-card";
import { useState } from "react";
import {
  UserCheck,
  UserX,
  ArrowRight,
  CheckCircle,
  Armchair,
  Users,
  MoveLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function SeatStatus() {
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  const navigate = useNavigate();

  // Sample seat data - in real app this would come from API
  const seatRows = 12;
  const seatsPerRow = 4;
  const occupiedSeats = [
    1, 2, 5, 6, 9, 10, 13, 14, 17, 18, 21, 22, 25, 26, 29, 30, 33, 34, 37, 38,
    41, 42, 73, 74, 77, 78,
  ];

  const totalSeats = seatRows * seatsPerRow;
  const availableSeats = totalSeats - occupiedSeats.length;

  const getSeatNumber = (row: number, seat: number) => {
    return row * seatsPerRow + seat + 1;
  };

  const isSeatOccupied = (seatNumber: number) => {
    return occupiedSeats.includes(seatNumber);
  };

  const isSeatSelected = (seatNumber: number) => {
    return selectedSeats.includes(seatNumber);
  };

  const handleSeatClick = (seatNumber: number) => {
    if (isSeatOccupied(seatNumber)) return;

    setSelectedSeats((prev) =>
      prev.includes(seatNumber)
        ? prev.filter((s) => s !== seatNumber)
        : [...prev, seatNumber],
    );
  };
  const getSeatClassName = (seatNumber: number) => {
    if (isSeatOccupied(seatNumber)) {
      return "bg-gradient-to-br from-red-500 to-red-600 cursor-not-allowed shadow-lg";
    } else if (isSeatSelected(seatNumber)) {
      return "bg-gradient-to-br from-blue-500 to-blue-600 cursor-pointer hover:from-blue-600 hover:to-blue-700 shadow-lg";
    } else {
      return "bg-gradient-to-br from-emerald-500 to-emerald-600 cursor-pointer hover:from-emerald-600 hover:to-emerald-700 shadow-lg";
    }
  };

  return (
    <div className="flex w-full flex-col items-start gap-6 rounded-lg border border-zinc-200 bg-white p-8">
      <Button
        onClick={() => navigate(-1)}
        variant="ghost"
        className="mb-4 rounded"
      >
        <MoveLeft />
        Back to booking
      </Button>
      <HeaderCard
        title="Seat Status"
        description="Check the status of your seat reservations and availability."
      />{" "}
      <div className="w-full">
        {/* Modern Header with Icon */}
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
            <Armchair className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Current Seat Status
            </h2>
            <p className="text-gray-600">
              Select your preferred seats for the journey
            </p>
          </div>
        </div>{" "}
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Enhanced Seat Map */}
          <div className="flex-shrink-0 rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8">
            {/* Modern Legend */}
            <div className="mb-8 flex flex-wrap gap-6">
              <div className="flex items-center gap-3 rounded-lg border border-zinc-200 bg-white px-4 py-2">
                <div className="h-4 w-4 rounded-full bg-emerald-500 shadow-sm"></div>
                <span className="text-sm font-semibold text-gray-700">
                  Available
                </span>
                <CheckCircle className="h-4 w-4 text-emerald-500" />
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-zinc-200 bg-white px-4 py-2">
                <div className="h-4 w-4 rounded-full bg-red-500 shadow-sm"></div>
                <span className="text-sm font-semibold text-gray-700">
                  Occupied
                </span>
                <UserX className="h-4 w-4 text-red-500" />
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-zinc-200 bg-white px-4 py-2">
                <div className="h-4 w-4 rounded-full bg-blue-500 shadow-sm"></div>
                <span className="text-sm font-semibold text-gray-700">
                  Selected
                </span>
                <UserCheck className="h-4 w-4 text-blue-500" />
              </div>
            </div>

            {/* Enhanced Seat Grid */}
            <div className="relative">
              {/* Bus Front Indicator */}
              <div className="hashed-background mb-4 rounded-lg border border-zinc-300 bg-zinc-100 p-5 text-center">
                <h1 className="text-sm text-zinc-500">
                  This is the front of the ferry
                </h1>
              </div>

              <div
                className="grid gap-3 rounded-xl bg-white p-6 shadow-inner"
                style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
              >
                {Array.from({ length: seatRows }, (_, rowIndex) =>
                  Array.from({ length: seatsPerRow }, (_, seatIndex) => {
                    const seatNumber = getSeatNumber(rowIndex, seatIndex);
                    return (
                      <button
                        key={seatNumber}
                        onClick={() => handleSeatClick(seatNumber)}
                        className={`relative h-10 w-10 rounded-xl transition-all duration-200 ${getSeatClassName(seatNumber)} ${
                          isSeatSelected(seatNumber)
                            ? "scale-110 ring-2 ring-blue-300"
                            : ""
                        } ${!isSeatOccupied(seatNumber) ? "hover:scale-105" : ""}`}
                        disabled={isSeatOccupied(seatNumber)}
                        title={`Seat ${seatNumber} - ${isSeatOccupied(seatNumber) ? "Occupied" : isSeatSelected(seatNumber) ? "Selected" : "Available"}`}
                      >
                        <span className="text-xs font-bold text-white">
                          {seatNumber}
                        </span>
                        {isSeatSelected(seatNumber) && (
                          <CheckCircle className="absolute -top-1 -right-1 h-4 w-4 text-white" />
                        )}
                      </button>
                    );
                  }),
                ).flat()}
              </div>
            </div>
          </div>{" "}
          {/* Enhanced Right Panel */}
          <div className="flex flex-1 flex-col gap-6">
            {/* Enhanced Statistics Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 p-6 text-white transition-transform hover:scale-105">
                <div className="absolute -top-4 -right-4 h-20 w-20 rounded-full bg-white/10"></div>
                <div className="relative">
                  <div className="mb-2 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    <span className="text-sm font-semibold">Available</span>
                  </div>
                  <div className="text-3xl font-bold">{availableSeats}</div>
                  <div className="text-xs text-emerald-100">
                    seats remaining
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-500 to-red-600 p-6 text-white shadow-xl transition-transform hover:scale-105">
                <div className="absolute -top-4 -right-4 h-20 w-20 rounded-full bg-white/10"></div>
                <div className="relative">
                  <div className="mb-2 flex items-center gap-2">
                    <UserX className="h-5 w-5" />
                    <span className="text-sm font-semibold">Occupied</span>
                  </div>
                  <div className="text-3xl font-bold">
                    {occupiedSeats.length}
                  </div>
                  <div className="text-xs text-red-100">seats taken</div>
                </div>
              </div>
            </div>

            {/* Enhanced Seat Selection Panel */}
            <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Selected Seats
                  </h3>
                  <p className="text-sm text-gray-600">Your seat selection</p>
                </div>
              </div>

              <div className="space-y-3">
                {selectedSeats.length > 0 ? (
                  selectedSeats.map((seatNumber) => (
                    <div
                      key={seatNumber}
                      className="flex items-center justify-between rounded-lg border border-gray-100 bg-white p-3 shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                          <Armchair className="h-4 w-4 text-blue-600" />
                        </div>
                        <span className="font-semibold text-gray-900">
                          Seat {seatNumber}
                        </span>
                      </div>
                      <CheckCircle className="h-5 w-5 text-emerald-500" />
                    </div>
                  ))
                ) : (
                  <div className="rounded-lg border-2 border-dashed border-gray-300 p-8 text-center">
                    <Armchair className="mx-auto mb-3 h-12 w-12 text-gray-400" />
                    <p className="font-medium text-gray-500">
                      No seats selected
                    </p>
                    <p className="text-sm text-gray-400">
                      Click on available seats to select
                    </p>
                  </div>
                )}
              </div>

              {selectedSeats.length > 0 && (
                <button className="group mt-6 w-full rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-4 font-bold text-white shadow-lg transition-all hover:from-emerald-700 hover:to-emerald-800 hover:shadow-xl active:scale-95">
                  <div className="flex items-center justify-center gap-3">
                    <span>PROCEED TO BOOKING</span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </button>
              )}
            </div>

            {/* Quick Stats Summary */}
            <div className="rounded-2xl bg-gradient-to-br from-gray-700 to-gray-800 p-8 text-white shadow-xl">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold">Journey Summary</h4>
                  <p className="text-sm text-gray-300">
                    Total capacity overview
                  </p>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-400">
                    {totalSeats}
                  </div>
                  <div className="text-xs text-gray-400">Total Seats</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-400">
                    {selectedSeats.length}
                  </div>
                  <div className="text-xs text-gray-400">Selected</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400">
                    {Math.round((availableSeats / totalSeats) * 100)}%
                  </div>
                  <div className="text-xs text-gray-400">Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
