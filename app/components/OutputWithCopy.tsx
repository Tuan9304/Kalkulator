"use client";

import { cn } from "@/lib/utils";

import CopyButton from "./CopyButton";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export type OutputWithCopyProps = {
  className?: string;
  label?: string;
  value: string;
};

export function OutputWithCopy({
  className,
  label,
  value,
}: OutputWithCopyProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {label && <Label htmlFor="output">{label}</Label>}
      <div className="relative">
        <Input
          className="bg-white caret-transparent pr-10"
          id="output"
          readOnly
          value={value}
        />
        <CopyButton className="absolute top-1.5 right-2" value={value} />
      </div>
    </div>
  );
}
