import { useActionState, useState, useEffect } from "react";
import { useAuth } from "../lib/useAuth";
import { useNavigate, Link } from "react-router-dom";
import TextField from "@/components/TextField";
import AuthLayout from "@/components/auth/AuthLayout";
import ActionSubmitButton from "@/components/auth/ActionSubmitButton";
import PasswordField from "@/components/auth/PasswordField";
import AuthDivider from "@/components/auth/AuthDivider";
import GoogleAuthButton from "@/components/auth/GoogleAuthButton";
import SignupHeroContent from "@/components/auth/SignupHeroContent";
import RoleSelector from "@/components/auth/RoleSelector";

interface ActionState {
  error?: string;
  success?: boolean;
}

const SignupPage = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [role, setRole] = useState("passenger");

  // Action function for useActionState
  async function signupAction(
    _: ActionState | null,
    formData: FormData
  ): Promise<ActionState> {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const selectedRole = (formData.get("role") as string) || role;

    try {
      await signup(email, password, selectedRole);
      return { success: true };
    } catch (error: unknown) {
      if (error instanceof Error) {
        return { error: error.message };
      } else {
        return { error: "Failed to create account. Please try again." };
      }
    }
  }

  const [state, action, pending] = useActionState(signupAction, null);

  // Handle successful signup
  useEffect(() => {
    if (state?.success) {
      navigate("/dashboard");
    }
  }, [state?.success, navigate]);
  return (
    <AuthLayout
      heroContent={<SignupHeroContent />}
      heroImage="https://images.pexels.com/photos/2403916/pexels-photo-2403916.jpeg"
      heroImageAlt="Travel adventure"
    >
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">
          Join Travel Express
        </h2>
        <p className="text-gray-600">
          Create your account and start exploring the world
        </p>
      </div>{" "}
      <form action={action} className="space-y-6">
        <div className="space-y-4">
          <TextField
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            required
            name="email"
            className="group"
          />

          <PasswordField placeholder="Create a strong password" />
          <RoleSelector value={role} onValueChange={setRole} />
        </div>{" "}
        {/* Error Message */}
        {state?.error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
            {state.error}
          </div>
        )}{" "}
        {/* Submit Button */}
        <ActionSubmitButton loadingText="Creating account..." pending={pending}>
          Create Account
        </ActionSubmitButton>
      </form>
      <AuthDivider />
      <GoogleAuthButton text="Sign up with Google" />
      {/* Sign In Link */}
      <div className="text-center mt-8">
        <span className="text-gray-600">Already have an account?</span>
        <Link
          to="/login"
          className="ml-2 inline-flex items-center gap-2 underline underline-offset-2 hover:text-emerald-700 transition"
        >
          Sign in here
        </Link>
      </div>
    </AuthLayout>
  );
};

export default SignupPage;
