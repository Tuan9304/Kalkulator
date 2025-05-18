"use client";

import { useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="hover:bg-primary/80" disabled={pending} type="submit">
      Calculate
    </Button>
  );
}
