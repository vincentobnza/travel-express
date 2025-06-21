import { LogOut, Ship, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { navigationSections } from "../data/sidebar";
import UserFeedback from "./cards/UserFeedback";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
  onSignOut: () => void;
};

export default function Sidebar({ isOpen, onClose, onSignOut }: SidebarProps) {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-grow flex-col overflow-y-auto border-r border-zinc-200 bg-white">
          <div className="flex h-16 flex-shrink-0 items-center justify-center bg-gradient-to-r from-emerald-600 to-emerald-700 px-4">
            <div className="flex items-center gap-3">
              <Ship className="h-8 w-8 text-white" />
              <div className="text-white">
                <h1 className="text-lg font-bold">CENAMARK</h1>
                <p className="text-xs text-emerald-100">SHIPPING LINES</p>
              </div>
            </div>
          </div>{" "}
          <nav className="mt-8 flex-1 px-4">
            {navigationSections.map((section, sectionIndex) => (
              <div
                key={section.label}
                className={sectionIndex > 0 ? "mt-2" : ""}
              >
                <div className="px-3 py-2">
                  <h3 className="text-[10px] font-semibold tracking-wider text-zinc-400 uppercase">
                    {section.label}
                  </h3>
                </div>
                <div className="space-y-1">
                  {section.items.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className={({ isActive }) =>
                        `group flex items-center rounded-lg p-2 text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-emerald-600 text-white"
                            : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
                        }`
                      }
                    >
                      <item.icon className="mr-3 size-4 flex-shrink-0" />
                      {item.name}{" "}
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
          </nav>
          {/* User Feedback Card */}
          <UserFeedback />
          {/* SIGNOUT OR LOGOUT BUTTON */}
          <div className="flex flex-shrink-0 border-t border-zinc-200 p-4">
            <button
              onClick={onSignOut}
              className="group flex w-full items-center rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-amber-50 hover:text-amber-700"
            >
              <LogOut className="mr-3 h-5 w-5 flex-shrink-0" />
              Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-white shadow-xl transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between bg-gradient-to-r from-emerald-600 to-emerald-700 px-4">
          <div className="flex items-center gap-3">
            <Ship className="h-8 w-8 text-white" />
            <div className="text-white">
              <h1 className="text-lg font-bold">CENAMARK</h1>
              <p className="text-xs text-emerald-100">SHIPPING LINES</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-md p-2 text-white hover:bg-emerald-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>{" "}
        <nav className="mt-8 flex-1 px-4">
          {navigationSections.map((section, sectionIndex) => (
            <div key={section.label} className={sectionIndex > 0 ? "mt-2" : ""}>
              <div className="px-3 py-2">
                <h3 className="text-xs font-semibold tracking-wider text-zinc-500 uppercase">
                  {section.label}
                </h3>
              </div>
              <div className="space-y-1">
                {section.items.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `group flex items-center rounded-lg p-2 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-green-50 text-emerald-900"
                          : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
                      }`
                    }
                  >
                    <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                    {item.name}{" "}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </nav>
        {/* User Feedback Card - Mobile */}
        <div className="mx-4 mb-6">
          <div className="rounded-lg border border-emerald-300 bg-emerald-50 p-4">
            <div className="mb-3 flex items-center">
              <div className="flex-shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
                  <svg
                    className="h-4 w-4 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-3">
                <h4 className="text-sm font-semibold text-emerald-900">
                  Share Your Experience
                </h4>
              </div>
            </div>
            <p className="mb-3 text-xs leading-relaxed text-emerald-700">
              Help us improve our services by sharing your feedback and
              suggestions.
            </p>
            <button
              onClick={onClose}
              className="w-full rounded-md bg-emerald-600 px-3 py-2.5 text-xs font-medium text-white transition-colors duration-200 hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-1 focus:outline-none"
            >
              Give Feedback
            </button>
          </div>
        </div>
        <div className="flex flex-shrink-0 border-t border-zinc-200 p-4">
          <button
            onClick={() => {
              onSignOut();
              onClose();
            }}
            className="group flex w-full items-center rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-amber-50 hover:text-amber-700"
          >
            <LogOut className="mr-3 h-5 w-5 flex-shrink-0" />
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
}
