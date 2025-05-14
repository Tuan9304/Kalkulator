"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import FormInput from "@/components/FormInput";
import { SubmitButton } from "@/components/SubmitButton";
import { Form } from "@/components/ui/form";

import { baseConverterSchema } from "./schema";
import { baseConvert } from "./utils";

export default function BaseConverter() {
  const [result, setResult] = useState("");

  const form = useForm<z.infer<typeof baseConverterSchema>>({
    defaultValues: {
      fromBase: 10,
      number: "",
      toBase: 2,
    },
    resolver: zodResolver(baseConverterSchema),
  });

  const onSubmit = (values: z.infer<typeof baseConverterSchema>) => {
    const result = baseConvert(values);

    setResult(result);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormInput
          label="Number"
          name="number"
          placeholder="Enter number to convert"
        />
        <FormInput
          label="From Base"
          name="fromBase"
          placeholder="Enter base of the number"
          type="number"
        />
        <FormInput
          label="To Base"
          name="toBase"
          placeholder="Enter base of the number"
          type="number"
        />
        <SubmitButton />
      </form>
      <p>Result: {result}</p>
    </Form>
  );
}
