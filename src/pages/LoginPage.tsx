import { useState } from "react";
import { useAuth } from "../lib/useAuth";
import { useNavigate, Link } from "react-router-dom";
import TextField from "@/components/TextField";
import { Button } from "@/components/ui/button";
import { Sailboat, MapPin, MoveRight } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const { error } = await login(email, password);
      if (error) throw error;
      navigate("/");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen flex">
      {/* Left Side - Hero Section */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3047993/pexels-photo-3047993.jpeg"
            alt="Travel destination"
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

            {/* Main Heading */}
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Your journey begins with a single click
            </h2>

            {/* Description */}
            <p className="text-xl text-white/95 mb-10 leading-relaxed">
              Discover amazing destinations, book seamlessly, and create
              memories that last a lifetime.
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
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
            <div className="p-2 bg-emerald-100 rounded-full">
              <Sailboat className="h-6 w-6 text-emerald-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Travel Express</h1>
          </div>

          {/* Header */}
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Welcome back
            </h2>
            <p className="text-gray-600">
              Sign in to your account to continue your journey
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <TextField
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="group"
              />

              <div className="flex flex-col gap-4">
                <TextField
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="group"
                />

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="show-password"
                    checked={showPassword}
                    onCheckedChange={(checked) => setShowPassword(!!checked)}
                  />
                  <Label htmlFor="show-password">Show password</Label>
                </div>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}
            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              disabled={isLoading}
              className="w-full rounded text-white font-semibold hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 hover:from-emerald-600 hover:to-blue-600 focus:ring-2 focus:ring-emerald-400 focus:outline-none"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Signing in...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  Sign In
                  <MoveRight className="w-4 h-4" />
                </div>
              )}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative flex items-center my-6">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="mx-4 text-gray-400 font-medium bg-white px-2">
              or
            </span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          {/* Google Sign In */}
          <Button
            variant="outline"
            size="lg"
            className="w-full rounded flex items-center justify-center gap-3 border-gray-300 hover:bg-gray-50 transition"
          >
            <FcGoogle className="w-5 h-5" />
            <span className="font-medium text-gray-700">
              Sign in with Google
            </span>
          </Button>

          {/* Sign Up Link */}
          <div className="text-center mt-8">
            <span className="text-gray-600">New to Travel Express?</span>
            <Link
              to="/signup"
              className="ml-2 inline-flex items-center gap-2 underline underline-offset-2 hover:text-emerald-700 transition"
            >
              Create your account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
