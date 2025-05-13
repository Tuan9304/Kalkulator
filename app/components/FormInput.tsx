import React from "react";

import { cn } from "@/lib/utils";

import { FormControl, FormItem, FormLabel, FormMessage } from "./ui/form";

export type FormInputProps = {
  children: React.ReactNode;
  className?: string;
  label: string;
};

export default function FormInput({
  children,
  className,
  label,
}: FormInputProps) {
  return (
    <FormItem className={cn("mb-4", className)}>
      <FormLabel>{label}</FormLabel>
      <FormControl>{children}</FormControl>
      <FormMessage />
    </FormItem>
  );
}
