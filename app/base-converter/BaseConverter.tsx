"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import FormInput from "@/components/FormInput";
import { SubmitButton } from "@/components/SubmitButton";
import { Form, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

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
        <FormField
          control={form.control}
          name="number"
          render={({ field }) => (
            <FormInput label="Number">
              <Input placeholder="Enter number to convert" {...field} />
            </FormInput>
          )}
        />
        <FormField
          control={form.control}
          name="fromBase"
          render={({ field }) => (
            <FormInput label="From Base">
              <Input
                placeholder="Enter base of the number"
                type="number"
                {...field}
              />
            </FormInput>
          )}
        />
        <FormField
          control={form.control}
          name="toBase"
          render={({ field }) => (
            <FormInput label="To Base">
              <Input
                placeholder="Enter base to convert to"
                type="number"
                {...field}
              />
            </FormInput>
          )}
        />
        <SubmitButton />
      </form>
      <p>Result: {result}</p>
    </Form>
  );
}
