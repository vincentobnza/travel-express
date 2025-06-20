import { MapPin, MoveRight } from "lucide-react";

const LoginHeroContent = () => {
  return (
    <>
      {/* Main Heading */}
      <h2 className="text-5xl font-bold mb-6 leading-tight">
        Your journey begins with a single click
      </h2>

      {/* Description */}
      <p className="text-xl text-white/95 mb-10 leading-relaxed">
        Discover amazing destinations, book seamlessly, and create memories that
        last a lifetime.
      </p>

      {/* Feature Points */}
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm border border-white/30">
            <MapPin className="h-5 w-5" />
          </div>
          <span className="text-lg font-medium">
            Explore 1000+ destinations worldwide
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm border border-white/30">
            <MoveRight className="h-5 w-5" />
          </div>
          <span className="text-lg font-medium">
            Instant booking confirmation
          </span>
        </div>
      </div>
    </>
  );
};

export default LoginHeroContent;
