import HeaderCard from "@/components/header-card";
import DashboardWrapper from "@/components/shared/dashboard-wrapper";

export default function UserManagement() {
  return (
    <DashboardWrapper>
      <HeaderCard
        title="User Management"
        description="Manage users, roles, and permissions efficiently with our comprehensive tools."
      />
    </DashboardWrapper>
  );
}
