import HeaderCard from "@/components/header-card";
import DashboardWrapper from "@/components/shared/dashboard-wrapper";

export default function ActivityLog() {
  return (
    <DashboardWrapper>
      <HeaderCard
        title="Activity Log"
        description="View and manage the activity log to monitor system usage and user actions."
      />
    </DashboardWrapper>
  );
}
