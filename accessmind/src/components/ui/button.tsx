import * as React from "react";
import { cn } from "@/lib/utils";

export function Button({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-2xl bg-white text-black px-6 py-3 font-medium hover:opacity-90 transition",
        className
      )}
      {...props}
    />
  );
}