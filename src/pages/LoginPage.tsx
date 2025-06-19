import { useState } from "react";
import { useAuth } from "../lib/useAuth";
import { useNavigate, Link } from "react-router-dom";

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
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
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2">
        <img
          src="https://images.pexels.com/photos/3047993/pexels-photo-3047993.jpeg"
          alt="Travel background"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="w-1/2 flex justify-center items-center p-12 bg-gray-100">
        <div className="max-w-xl w-full">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Travel Express Login
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                className="mt-3 block w-full px-4 py-3 bg-white border border-zinc-400 placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                className="mt-3 block w-full px-4 py-3 bg-white border border-zinc-400 placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Login
            </button>
          </form>
          {error && (
            <p className="mt-4 text-lg text-red-600 text-center">{error}</p>
          )}
          <p className="mt-6 text-lg text-center text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
