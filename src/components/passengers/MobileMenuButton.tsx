import { Menu } from "lucide-react";

export default function MobileMenuButton({
  onMenuClick,
}: {
  onMenuClick: () => void;
}) {
  return (
    <button
      onClick={onMenuClick}
      className="rounded-md p-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 lg:hidden"
    >
      <Menu className="h-6 w-6" />
    </button>
  );
}
