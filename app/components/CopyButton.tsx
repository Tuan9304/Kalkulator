"use client";

import { VariantProps } from "class-variance-authority";
import { CheckIcon, ClipboardIcon } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import { Button, buttonVariants } from "./ui/button";

interface CopyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  value: string;
}

export default function CopyButton({
  className,
  value,
  variant = "ghost",
  ...props
}: CopyButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }, [hasCopied]);

  return (
    <Button
      className={cn(
        "z-10 h-6 w-6 hover:bg-primary hover:text-primary-foreground [&_svg]:h-3 [&_svg]:w-3",
        className
      )}
      onClick={() => {
        navigator.clipboard.writeText(value);
        setHasCopied(true);
      }}
      size="icon"
      variant={variant}
      {...props}
    >
      <span className="sr-only">Copy</span>
      {hasCopied ? <CheckIcon /> : <ClipboardIcon />}
    </Button>
  );
}
