import HeaderCard from "@/components/header-card";
import DashboardWrapper from "@/components/shared/dashboard-wrapper";

const AdminDashboard = () => {
  const greetings = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return "Good morning 🌞";
    } else if (currentHour < 18) {
      return "Good afternoon 🌤️";
    } else {
      return "Good evening 🌜";
    }
  };
  return (
    <DashboardWrapper>
      <div className="flex w-full flex-col gap-2">
        <HeaderCard
          title={greetings()}
          description="Welcome to the admin dashboard."
        />

        <Stats />
      </div>
    </DashboardWrapper>
  );
};

const Stats = () => {
  return (
    <div className="mt-5 grid w-full grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-4">
      {[1, 2, 3, 4].map((item) => (
        <StatsCard key={item} />
      ))}
    </div>
  );
};

const StatsCard = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-1 rounded-lg border border-zinc-200 bg-zinc-50 p-8">
      <h2 className="text-lg font-semibold text-zinc-800">Statistics</h2>
      <p className="text-xs text-zinc-500">Overview of your data</p>

      <h1 className="mt-5 text-xl font-bold">
        {Math.floor(Math.random() * 1000) + 1}{" "}
      </h1>
    </div>
  );
};
export default AdminDashboard;
