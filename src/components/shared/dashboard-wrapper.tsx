export default function DashboardWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full flex-col items-start gap-6 rounded-lg border border-zinc-200 bg-white p-8">
      {children}
    </div>
  );
}
