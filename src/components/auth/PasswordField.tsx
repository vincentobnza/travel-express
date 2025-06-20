import { useState } from "react";
import TextField from "@/components/TextField";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface PasswordFieldProps {
  placeholder: string;
  name?: string;
  required?: boolean;
}

const PasswordField = ({
  placeholder,
  name = "password",
  required = true,
}: PasswordFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <TextField
        label="Password"
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        required={required}
        name={name}
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
  );
};

export default PasswordField;
