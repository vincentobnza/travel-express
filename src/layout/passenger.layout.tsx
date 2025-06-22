import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../lib/useAuth";
import TopNavigation from "@/components/passengers/TopNavigation";
import Sidebar from "@/components/passengers/Sidebar";

export default function PassengerLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-zinc-50">
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onSignOut={handleSignOut}
      />

      {/* Main Content */}
      <div className="flex flex-1 flex-col lg:ml-64">
        {/* Top Navigation */}
        <TopNavigation
          onMenuClick={() => setSidebarOpen(true)}
          user={user}
          onSignOut={handleSignOut}
        />

        {/* Page Content */}
        <main className="flex-1 p-4 lg:p-8">
          <div className="mx-auto max-w-7xl">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="bg-opacity-50 fixed inset-0 z-40 bg-zinc-900/10 backdrop-blur lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
