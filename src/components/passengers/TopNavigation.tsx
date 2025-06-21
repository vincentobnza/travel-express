import { useState } from "react";
import type { User } from "@supabase/supabase-js";
import { Bell, UserIcon } from "lucide-react";
import { Link } from "react-router-dom";
import TopNavigationSearchBar from "./TopNavigationSearchBar";
import MobileMenuButton from "./MobileMenuButton";

type TopNavigationProps = {
  onMenuClick: () => void;
  user: User | null;
  onSignOut: () => void;
};

export default function TopNavigation({
  onMenuClick,
  user,
  onSignOut,
}: TopNavigationProps) {
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white">
      <div className="flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Mobile menu button */}
        <MobileMenuButton onMenuClick={onMenuClick} />
        {/* Search bar */}
        <TopNavigationSearchBar />

        {/* Right side items */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <button className="relative rounded-full p-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900">
            <Bell className="h-6 w-6" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-amber-500 text-xs text-white">
              3
            </span>
          </button>

          {/* User menu */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-2 rounded-full bg-white p-2 text-sm hover:bg-zinc-50 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:outline-none"
            >
              {" "}
              <div className="justify-cente flex h-8 w-8 items-center text-zinc-700">
                <UserIcon className="size-6" />
              </div>
              <span className="hidden font-medium text-zinc-700 lg:block">
                {user?.email?.split("@")[0] || ""}
              </span>
            </button>

            {/* Dropdown menu */}
            <DropdownMenu
              showUserMenu={showUserMenu}
              setShowUserMenu={setShowUserMenu}
              onSignOut={onSignOut}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

const DropdownMenu = ({
  showUserMenu,
  setShowUserMenu,
  onSignOut,
}: {
  showUserMenu: boolean;
  setShowUserMenu: (show: boolean) => void;
  onSignOut: () => void;
}) => {
  return (
    <>
      {showUserMenu && (
        <div className="ring-opacity-5 absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black">
          <Link
            to="/profile"
            className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100"
            onClick={() => setShowUserMenu(false)}
          >
            Your Profile
          </Link>
          <Link
            to="/settings"
            className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100"
            onClick={() => setShowUserMenu(false)}
          >
            Settings
          </Link>
          <button
            onClick={() => {
              onSignOut();
              setShowUserMenu(false);
            }}
            className="block w-full px-4 py-2 text-left text-sm text-zinc-700 hover:bg-zinc-100"
          >
            Sign out
          </button>
        </div>
      )}
    </>
  );
};
