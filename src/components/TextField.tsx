import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import type { LucideIcon } from "lucide-react";
import React from "react";

type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  className?: string;
  labelIcon?: LucideIcon | React.ReactNode;
  required?: boolean;
  error?: string;
};

export default function TextField({
  label,
  className = "",
  labelIcon,
  required = false,
  error,
  ...rest
}: TextFieldProps) {
  return (
    <div className={cn("flex flex-col space-y-1.5", className)}>
      <div className="flex items-center gap-2.5">
        {labelIcon && (
          <span className="text-zinc-700">
            {typeof labelIcon === "function"
              ? React.createElement(labelIcon, { className: "size-4" })
              : React.isValidElement(labelIcon)
                ? React.cloneElement(labelIcon, {
                    className: "size-4",
                  } as React.SVGProps<SVGSVGElement>)
                : labelIcon}
          </span>
        )}
        {label && (
          <label className="text-sm text-gray-700">
            {label}
            {required && <span className="ml-1 text-red-200">*</span>}
          </label>
        )}
      </div>
      <Input
        required={required}
        className={cn(
          "borde brg-white h-10 rounded text-gray-900 transition-all duration-200 placeholder:text-gray-400",
          "focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100",
          "hover:border-gray-400",
          error
            ? "border-red-300 focus:border-red-500 focus:ring-red-100"
            : "border-gray-200",
        )}
        {...rest}
      />
    </div>
  );
}
