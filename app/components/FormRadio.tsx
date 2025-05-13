import React from "react";

import { cn } from "@/lib/utils";

import { FormControl, FormItem, FormLabel } from "./ui/form";
import { RadioGroupItem } from "./ui/radio-group";

export type FormRadioProps = {
  className?: string;
  label: string;
  value: string;
};

export default function FormRadio({ className, label, value }: FormRadioProps) {
  return (
    <FormItem className={cn("flex items-center", className)}>
      <FormControl>
        <RadioGroupItem className="bg-white" value={value} />
      </FormControl>
      <FormLabel>{label}</FormLabel>
    </FormItem>
  );
}
