"use client";

import React from "react";
import { useFormContext } from "react-hook-form";

import { cn } from "@/lib/utils";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { RadioGroup } from "./ui/radio-group";

type FormRadioProps = {
  children?: React.ReactNode;
  className?: string;
  label: string;
  name: string;
};

export default function FormRadio({
  children,
  className,
  label,
  name,
}: FormRadioProps) {
  const form = useFormContext();
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("grid gap-2", className)}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <RadioGroup
              className="flex"
              defaultValue={field.value}
              onValueChange={field.onChange}
            >
              {children}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
