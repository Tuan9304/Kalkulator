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
import { Input } from "./ui/input";

type FormInputProps = {
  className?: string;
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
};

export default function FormInput({
  className,
  label,
  name,
  placeholder,
  type,
}: FormInputProps) {
  const form = useFormContext();
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("grid gap-2", className)}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              className="bg-white"
              placeholder={placeholder}
              type={type}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
