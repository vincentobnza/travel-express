import { useState } from "react";
import {
  Calendar,
  Ship,
  CreditCard,
  MapPin,
  TrendingUp,
  Clock,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

export default function PassengerDashboard() {
  const [recentBookings] = useState([
    {
      id: "BK001",
      route: "Manila to Cebu",
      date: "2025-07-15",
      time: "08:00 AM",
      status: "confirmed",
      vessel: "MV Cenamark Express",
    },
    {
      id: "BK002",
      route: "Cebu to Bohol",
      date: "2025-07-20",
      time: "02:00 PM",
      status: "pending",
      vessel: "MV Island Hopper",
    },
  ]);

  const stats = [
    {
      title: "Total Trips",
      value: "12",
      icon: Ship,
      color: "bg-emerald-500",
      change: "+2 this month",
    },
    {
      title: "Active Bookings",
      value: "3",
      icon: Calendar,
      color: "bg-blue-500",
      change: "2 upcoming",
    },
    {
      title: "Total Spent",
      value: "₱15,420",
      icon: CreditCard,
      color: "bg-violet-500",
      change: "+₱3,200 this month",
    },
    {
      title: "Miles Traveled",
      value: "2,847",
      icon: MapPin,
      color: "bg-amber-500",
      change: "+450 miles",
    },
  ];

  return (
    <div className="space-y-3">
      {/* Welcome Section */}
      <div className="relative rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-800 p-10 text-white">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Kayangan_Lake%2C_Coron_-_Palawan.jpg/960px-Kayangan_Lake%2C_Coron_-_Palawan.jpg"
          alt="Kayangan Lake, Coron - Palawan"
          className="absolute inset-0 h-full w-full rounded-lg object-cover opacity-20"
        />
        <div className="relative z-10">
          <h1 className="mb-2 text-2xl font-bold">Welcome back!</h1>
          <p className="text-emerald-100">
            Ready for your next adventure? Check your bookings and discover new
            destinations.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="rounded-lg border border-zinc-200 bg-white p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-zinc-600">
                  {stat.title}
                </p>
                <p className="mt-1 text-2xl font-bold text-zinc-900">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-zinc-500">{stat.change}</p>
              </div>
              <div className={`${stat.color} rounded-lg p-3`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Bookings & Quick Actions */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {/* Recent Bookings */}
        <div className="lg:col-span-2">
          <div className="rounded-lg border border-zinc-200 bg-white">
            <div className="border-b border-zinc-200 p-6">
              <h2 className="text-lg font-semibold text-zinc-900">
                Recent Bookings
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentBookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="flex items-center justify-between rounded-lg bg-zinc-50 p-4"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <Ship className="h-8 w-8 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-zinc-900">
                          {booking.route}
                        </h3>
                        <p className="text-sm text-zinc-500">
                          {booking.vessel}
                        </p>
                        <div className="mt-1 flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-zinc-400" />
                          <span className="text-sm text-zinc-500">
                            {booking.date} at {booking.time}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          booking.status === "confirmed"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {booking.status === "confirmed" ? (
                          <CheckCircle className="mr-1 h-3 w-3" />
                        ) : (
                          <AlertCircle className="mr-1 h-3 w-3" />
                        )}
                        {booking.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <button className="w-full rounded-lg bg-emerald-600 px-4 py-2 text-white transition-colors hover:bg-emerald-700">
                  View All Bookings
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-3">
          <div className="rounded-lg border border-zinc-200 bg-white">
            <div className="border-b border-zinc-200 p-6">
              <h2 className="text-lg font-semibold text-zinc-900">
                Quick Actions
              </h2>
            </div>
            <div className="space-y-3 p-6">
              <button className="flex w-full items-center justify-center space-x-2 rounded-lg bg-emerald-600 px-4 py-3 text-white transition-colors hover:bg-emerald-700">
                <Ship className="h-5 w-5" />
                <span>Book New Trip</span>
              </button>
              <button className="flex w-full items-center justify-center space-x-2 rounded-lg border border-zinc-300 px-4 py-3 text-zinc-700 transition-colors hover:bg-zinc-50">
                <Calendar className="h-5 w-5" />
                <span>Manage Bookings</span>
              </button>
              <button className="flex w-full items-center justify-center space-x-2 rounded-lg border border-zinc-300 px-4 py-3 text-zinc-700 transition-colors hover:bg-zinc-50">
                <CreditCard className="h-5 w-5" />
                <span>Payment History</span>
              </button>
            </div>
          </div>

          {/* Travel Tips */}
          <div className="rounded-lg border border-zinc-200 bg-white">
            <div className="border-b border-zinc-200 p-6">
              <h2 className="text-lg font-semibold text-zinc-900">
                Travel Tips
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <TrendingUp className="mt-0.5 h-5 w-5 text-green-500" />
                  <div>
                    <h3 className="text-sm font-medium text-zinc-900">
                      Best Time to Travel
                    </h3>
                    <p className="text-sm text-zinc-500">
                      Book early morning trips for smoother sailing
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-emerald-500" />
                  <div>
                    <h3 className="text-sm font-medium text-zinc-900">
                      Check-in Reminder
                    </h3>
                    <p className="text-sm text-zinc-500">
                      Check-in opens 1 hour before departure
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
