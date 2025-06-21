type Props = {
  title?: string;
  description?: string;
};

export default function HeaderCard({ title, description }: Props) {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold text-zinc-900">{title}</h1>
        <p className="text-sm text-zinc-600">
          {description ||
            "Manage and track all your ferry reservations in one place."}
        </p>
      </div>
    </div>
  );
}
