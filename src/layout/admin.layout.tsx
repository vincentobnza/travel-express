import AdminSidebar from "@/components/admin/Sidebar";
import TopNavigationAdmin from "@/components/admin/TopNavigation.admin";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-zinc-50">
      <AdminSidebar />
      <div className="flex flex-1 flex-col lg:ml-64">
        <TopNavigationAdmin />
        <main className="flex-1 p-4 lg:p-8">
          <div className="mx-auto max-w-6xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
