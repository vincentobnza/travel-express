import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";

interface GoogleAuthButtonProps {
  text: string;
  onClick?: () => void;
}

const GoogleAuthButton = ({ text, onClick }: GoogleAuthButtonProps) => {
  return (
    <Button
      variant="outline"
      size="lg"
      onClick={onClick}
      className="w-full rounded flex items-center justify-center gap-3 border-gray-300 hover:bg-gray-50 transition"
    >
      <FcGoogle className="w-5 h-5" />
      <span className="font-medium text-gray-700">{text}</span>
    </Button>
  );
};

export default GoogleAuthButton;
