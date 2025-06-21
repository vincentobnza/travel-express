import { useState } from "react";
import {
  Ship,
  Users,
  Calendar as CalendarIcon,
  DollarSign,
  Bell,
  ArrowRight,
  Clock,
  MapPin,
  Star,
  TrendingUp,
  Book,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

// Hero Card Component
const HeroCard = () => {
  return (
    <div className="relative overflow-hidden rounded-lg border border-zinc-200 bg-gradient-to-br from-teal-50 to-white p-8 lg:col-span-8">
      <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-emerald-100 opacity-20"></div>
      <div className="absolute bottom-0 left-0 -mb-8 -ml-8 h-32 w-32 rounded-full bg-teal-100 opacity-20"></div>
      <div className="relative flex items-center justify-between">
        <div className="flex-1">
          <div className="mb-4 flex items-center space-x-2">
            <Ship className="h-8 w-8 text-emerald-600" />
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
              Featured Service
            </span>
          </div>
          <h1 className="mb-2 text-3xl font-bold text-zinc-900">
            Skip the line.
          </h1>
          <h2 className="mb-2 text-3xl font-bold text-zinc-900">
            Secure your Seat.
          </h2>
          <h3 className="mb-6 text-3xl font-bold text-zinc-900">
            Sail with ease!
          </h3>
          <p className="mb-8 max-w-md text-zinc-600">
            Experience hassle-free ferry booking with Cenamark Shipping Lines.
            Book instantly and enjoy premium comfort on every journey.
          </p>

          <div className="flex items-center space-x-4">
            <Button className="h-12 px-10 text-sm has-[>svg]:px-7">
              <Book />
              Book Now
            </Button>
            <div className="flex items-center space-x-1 text-sm text-zinc-500">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium text-zinc-700">4.9</span>
              <span>(2,847 reviews)</span>
            </div>
          </div>
        </div>

        <div className="ml-8 flex-shrink-0">
          <div className="relative">
            <img
              src="https://i.natgeofe.com/n/eb6538cf-b879-4307-b3b8-c121b2a7b540/double-outrigger-boats-called-banca-in-palawan-philippines_16x9.jpg"
              alt="Ferry Boat"
              className="h-48 w-72 rounded-lg object-cover shadow-lg"
            />
            <div className="absolute -right-4 -bottom-4 rounded-lg border border-zinc-200 bg-white p-3 shadow-lg">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-emerald-600" />
                <div>
                  <div className="text-xs font-semibold text-zinc-900">
                    Fast Booking
                  </div>
                  <div className="text-xs text-zinc-500">2 min average</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Booking List Card Component
const BookingListCard = ({ bookingList }: { bookingList: string[] }) => {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-6 lg:col-span-4">
      <div className="mb-4 border-b border-zinc-200 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-emerald-600" />
            <h3 className="text-lg font-semibold text-zinc-900">
              BOOKING LIST
            </h3>
          </div>
          <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700">
            {bookingList.length} passengers
          </span>
        </div>
      </div>
      <div className="space-y-3">
        {bookingList.map((name, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-lg p-2 transition-colors hover:bg-zinc-50"
          >
            <div className="flex items-center space-x-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-700">
                {index + 1}
              </span>
              <span className="text-sm font-medium text-zinc-700">{name}</span>
            </div>
            <div className="h-2 w-2 rounded-full bg-green-400"></div>
          </div>
        ))}
      </div>
      <div className="mt-4 border-t border-zinc-100 pt-4">
        <Button className="h-12 w-full rounded" variant="outline">
          <ArrowUpRight />
          View All Bookings
        </Button>
      </div>
    </div>
  );
};

// Schedule Card Component
const ScheduleCard = () => {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-6 lg:col-span-4">
      <div className="mb-4 border-b border-zinc-200 pb-4">
        <div className="flex items-center space-x-2">
          <Clock className="h-5 w-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-zinc-900">SCHEDULE</h3>
        </div>
      </div>
      <div className="space-y-3">
        <div className="rounded-lg border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-blue-600" />
              <span className="font-semibold text-zinc-900">
                Conception Port
              </span>
            </div>
            <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
              Active Route
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <CalendarIcon className="h-4 w-4 text-zinc-500" />
              <span className="text-sm text-zinc-600">March 14, 2025</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-400"></div>
              <span className="text-xs font-medium text-green-600">
                On Time
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between rounded-lg border border-zinc-200 bg-zinc-50 p-5 text-sm">
          <span className="text-zinc-500">Next Departure:</span>
          <span className="font-semibold text-zinc-900">8:30 AM</span>
        </div>
      </div>
    </div>
  );
};

// Ticket Pricing Card Component
const TicketPricingCard = ({
  pricing,
}: {
  pricing: Array<{ type: string; price: string }>;
}) => {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-6 lg:col-span-4">
      <div className="mb-4 border-b border-zinc-200 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <DollarSign className="h-5 w-5 text-green-600" />
            <h3 className="text-lg font-semibold text-zinc-900">
              TICKET PRICING
            </h3>
          </div>
          <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
            Current Rates
          </span>
        </div>
      </div>
      <div className="space-y-3">
        {pricing.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-lg border border-zinc-100 p-3 transition-colors hover:bg-zinc-100"
          >
            <div className="flex items-center space-x-3">
              <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
              <span className="text-sm text-zinc-600">{item.type}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span
                className={`text-lg font-bold ${
                  index === 0 ? "text-amber-400" : "text-zinc-800"
                }`}
              >
                {item.price}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 border-t border-zinc-100 pt-4">
        <div className="flex items-center justify-center space-x-1 text-xs text-zinc-500">
          <Bell className="h-3 w-3" />
          <span>Prices may vary during peak seasons</span>
        </div>
      </div>
    </div>
  );
};

// Calendar Card Component
const CalendarCard = ({
  date,
  setDate,
}: {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
}) => {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-6 lg:col-span-4">
      <div className="mb-4 border-b border-zinc-200 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <CalendarIcon className="h-5 w-5 text-zinc-600" />
            <h3 className="text-lg font-semibold text-zinc-900">
              Travel Calendar
            </h3>
          </div>
          <span className="rounded-full bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700">
            Select Date
          </span>
        </div>
      </div>

      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="w-full rounded-lg border-0 p-0"
      />

      <div className="mt-4 border-t border-zinc-100 pt-4">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center space-x-1">
            <div className="h-2 w-2 rounded-full bg-zinc-600"></div>
            <span className="text-zinc-500">Selected Date</span>
          </div>
          <span className="text-zinc-500">
            {date ? date.toLocaleDateString() : "No date selected"}
          </span>
        </div>
      </div>
    </div>
  );
};

// Announcement Card Component
const AnnouncementCard = () => {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-6 lg:col-span-8">
      <div className="mb-4 border-b border-zinc-200 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bell className="h-5 w-5 text-amber-600" />
            <h3 className="text-lg font-semibold text-zinc-900">
              ANNOUNCEMENT
            </h3>
          </div>
          <span className="flex items-center space-x-1 rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-700">
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-500"></div>
            <span>Important</span>
          </span>
        </div>
      </div>
      <div className="rounded-lg border border-zinc-200 bg-gradient-to-r from-amber-50 to-white p-4">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100">
              <Bell className="h-4 w-4 text-amber-600" />
            </div>
          </div>
          <div className="flex-1">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium text-amber-700">
                Date: February 5, 2025
              </span>
              <span className="rounded-full bg-amber-100 px-2 py-1 text-xs text-amber-600">
                New Schedule
              </span>
            </div>
            <div className="mb-3">
              <span className="text-sm font-semibold text-zinc-700">
                Dear Passengers,
              </span>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-zinc-700">
              Please be informed that Cenamark Shipping Lines will be
              implementing a new schedule for booking service on the Sea lines
              Quin. Booking now starting next month. The change is being made to
              improve service efficiency and accommodate more passengers.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-xs text-zinc-500">
                <span>📅 Effective: March 1, 2025</span>
                <span>🚢 All Routes Affected</span>
              </div>
              <button className="flex items-center space-x-1 text-sm font-medium text-amber-600 hover:text-amber-700">
                <span>Read More</span>
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between text-xs">
        <span className="text-zinc-500">
          For questions, contact customer service
        </span>
        <div className="flex items-center space-x-1 text-emerald-600">
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
          <span>System Operational</span>
        </div>
      </div>
    </div>
  );
};

// Main Dashboard Component
export default function PassengerDashboard() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const bookingList = [
    "Maue",
    "Jasser",
    "Rochelle",
    "Arthur",
    "Carlos",
    "Bahe Magis",
  ];

  const pricing = [
    { type: "REGULAR", price: "₱820" },
    { type: "CHILDREN (7 yrs & below)", price: "₱700" },
    { type: "STUDENT", price: "₱650" },
    { type: "SENIOR CITIZEN", price: "₱656" },
  ];

  return (
    <div className="space-y-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-12">
          <HeroCard />
          <BookingListCard bookingList={bookingList} />
          <ScheduleCard />
          <TicketPricingCard pricing={pricing} />
          <CalendarCard date={date} setDate={setDate} />
          <AnnouncementCard />
        </div>
      </div>
    </div>
  );
}
