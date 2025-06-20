import { useActionState, useEffect } from "react";
import { useAuth } from "../lib/useAuth";
import { useNavigate, Link } from "react-router-dom";
import TextField from "@/components/TextField";
import AuthLayout from "@/components/auth/AuthLayout";
import ActionSubmitButton from "@/components/auth/ActionSubmitButton";
import PasswordField from "@/components/auth/PasswordField";
import AuthDivider from "@/components/auth/AuthDivider";
import GoogleAuthButton from "@/components/auth/GoogleAuthButton";
import LoginHeroContent from "@/components/auth/LoginHeroContent";

interface ActionState {
  error?: string;
  success?: boolean;
}

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  // Action function for useActionState
  async function loginAction(
    _: ActionState | null,
    formData: FormData
  ): Promise<ActionState> {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const { error } = await login(email, password);
      if (error) throw error;
      return { success: true };
    } catch (error: unknown) {
      if (error instanceof Error) {
        return { error: error.message };
      } else {
        return { error: "An unexpected error occurred" };
      }
    }
  }

  const [state, action, pending] = useActionState(loginAction, null);

  // Handle successful login
  useEffect(() => {
    if (state?.success) {
      navigate("/");
    }
  }, [state?.success, navigate]);

  return (
    <AuthLayout
      heroContent={<LoginHeroContent />}
      heroImage="https://images.pexels.com/photos/3047993/pexels-photo-3047993.jpeg"
      heroImageAlt="Travel destination"
    >
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">Welcome back</h2>
        <p className="text-gray-600">
          Sign in to your account to continue your journey
        </p>
      </div>{" "}
      <form action={action} className="space-y-6">
        <div className="space-y-4">
          <TextField
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            name="email"
            required
            className="group"
          />

          <PasswordField placeholder="Enter your password" />
        </div>

        {/* Error Message */}
        {state?.error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
            {state.error}
          </div>
        )}

        {/* Submit Button */}
        <ActionSubmitButton loadingText="Signing in..." pending={pending}>
          Sign In
        </ActionSubmitButton>
      </form>
      <AuthDivider />
      <GoogleAuthButton text="Sign in with Google" />
      {/* Sign Up Link */}
      <div className="text-center mt-8">
        <span className="text-gray-600">New to Travel Express?</span>
        <Link
          to="/signup"
          className="ml-2 inline-flex items-center gap-2 underline underline-offset-2 hover:text-emerald-700 transition"
        >
          Create your account
        </Link>{" "}
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
