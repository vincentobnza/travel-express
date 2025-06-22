import { FolderDot } from "lucide-react";
import { adminNavigationSections } from "../data/admin-sidebar";
import { NavLink } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
      <div className="flex flex-grow flex-col overflow-y-auto border-r border-zinc-200 bg-white">
        <div className="relative flex h-16 flex-shrink-0 items-center justify-center bg-gradient-to-r from-emerald-900 to-green-900 px-4">
          <div className="z-10 flex items-center gap-3">
            <FolderDot className="h-8 w-8 text-white" />
            <div className="text-white">
              <h1 className="text-lg font-bold">CENAMARK</h1>
              <p className="text-xs text-emerald-100">Administrator</p>
            </div>
          </div>

          <img
            src="https://media.rerecruitment.com/uploads/2024/04/iStock-1466985705.jpg?w=2000&h=1333&scale.option=fill&cw=2000&ch=1333&cx=center&cy=center"
            alt="admin-logo"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
        </div>{" "}
        <nav className="mt-8 flex-1 px-4">
          {adminNavigationSections.map((section, sectionIndex) => (
            <div key={section.label} className={sectionIndex > 0 ? "mt-2" : ""}>
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
                      `group flex items-center rounded p-2 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-zinc-100 text-zinc-900"
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
      </div>
    </div>
  );
}
