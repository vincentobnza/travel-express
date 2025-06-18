import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      <header>
        <h1>Admin</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
