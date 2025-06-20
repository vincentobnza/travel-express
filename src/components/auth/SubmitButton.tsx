import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

interface SubmitButtonProps {
  loadingText: string;
  children: React.ReactNode;
}

const SubmitButton = ({ loadingText, children }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      size="lg"
      disabled={pending}
      className="w-full rounded text-white font-semibold hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 hover:from-emerald-600 hover:to-blue-600 focus:ring-2 focus:ring-emerald-400 focus:outline-none"
    >
      {pending ? (
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          {loadingText}
        </div>
      ) : (
        <div className="flex items-center gap-2">
          {children}
          <MoveRight className="w-4 h-4" />
        </div>
      )}
    </Button>
  );
};

export default SubmitButton;
