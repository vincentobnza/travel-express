import { useNavigate } from "react-router-dom";

type Island = {
  name: string;
  image: string;
  distance: string;
  href?: string;
};

type IslandCardProps = {
  island: Island;
};

export const IslandCard = ({ island }: IslandCardProps) => {
  const isUser = true;
  const navigate = useNavigate();
  const routeSlug = island.name.toLowerCase().replace(/\s+/g, "-");

  const handleClick = () => {
    if (!isUser) {
      alert("Please log in to view more details.");
      return;
    }

    navigate(routeSlug || "/");
  };
  return (
    <div
      onClick={handleClick}
      role="button"
      className="group relative flex aspect-square cursor-pointer flex-col items-center overflow-hidden rounded-lg transition-transform duration-200 hover:scale-105"
    >
      <img
        src={island.image}
        alt={island.name}
        className="h-full w-full object-cover opacity-60 transition-transform duration-200 group-hover:scale-105 group-hover:opacity-100 group-hover:brightness-110"
      />
      <div className="bg-opacity-50 absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-b from-transparent to-gray-800 p-8 pb-10">
        <h1 className="mb-4 text-lg font-bold">{island.name}</h1>
        <p className="text-sm text-gray-300">{island.distance}</p>
      </div>
    </div>
  );
};
