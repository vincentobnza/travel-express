import { Search } from "lucide-react";

export default function TopNavigationSearchBar() {
  return (
    <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-start">
      <div className="w-full max-w-lg lg:max-w-xs">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-5 w-5 text-zinc-400" />
          </div>
          <input
            className="block w-full rounded-md border border-zinc-300 bg-white py-2 pr-3 pl-10 text-sm placeholder-zinc-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none"
            placeholder="Search bookings, trips..."
            type="search"
          />
        </div>
      </div>
    </div>
  );
}
