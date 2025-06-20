import { Users, Shield } from "lucide-react";

const SignupHeroContent = () => {
  return (
    <>
      {/* Main Heading */}
      <h2 className="text-5xl font-bold mb-6 leading-tight">
        Adventure awaits those who dare to explore
      </h2>

      {/* Description */}
      <p className="text-xl text-white/95 mb-10 leading-relaxed">
        Join thousands of travelers who have discovered extraordinary places and
        created unforgettable experiences.
      </p>

      {/* Feature Points */}
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm border border-white/30">
            <Users className="h-5 w-5" />
          </div>
          <span className="text-lg font-medium">
            Join 50,000+ happy travelers
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm border border-white/30">
            <Shield className="h-5 w-5" />
          </div>
          <span className="text-lg font-medium">
            Secure booking & 24/7 support
          </span>
        </div>
      </div>
    </>
  );
};

export default SignupHeroContent;
