import { Sailboat } from "lucide-react";

interface AuthLayoutProps {
  children: React.ReactNode;
  heroContent: React.ReactNode;
  heroImage: string;
  heroImageAlt: string;
}

const AuthLayout = ({
  children,
  heroContent,
  heroImage,
  heroImageAlt,
}: AuthLayoutProps) => {
  return (
    <div className="h-screen flex">
      {/* Left Side - Hero Section */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={heroImageAlt}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/80 via-teal-800/85 to-blue-800/90"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col justify-center px-12 py-16 text-white w-full">
          <div className="max-w-lg">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm border border-white/30">
                <Sailboat className="h-7 w-7" />
              </div>
              <h1 className="text-3xl font-bold">Travel Express</h1>
            </div>

            {heroContent}
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
            <div className="p-2 bg-emerald-100 rounded-full">
              <Sailboat className="h-6 w-6 text-emerald-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Travel Express</h1>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
