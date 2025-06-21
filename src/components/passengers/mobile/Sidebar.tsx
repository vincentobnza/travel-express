import { Ship, X, LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";
import MobileUserFeedback from "./UserFeedback";

type MobileSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
  onSignOut: () => void;
  navigationSections: [
    {
      label: string;
      items: [
        {
          name: string;
          href: string;
          icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
        },
      ];
    },
  ];
};

export default function MobileSideBar({
  isOpen,
  onClose,
  onSignOut,
  navigationSections,
}: MobileSidebarProps) {
  return (
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
      <MobileUserFeedback />
      {/* SIGNOUT / LOGOUT BUTTON */}
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
  );
}
