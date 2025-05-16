"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import FormInput from "@/components/FormInput";
import { SubmitButton } from "@/components/SubmitButton";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
    <Card className="max-w-sm bg-primary/5 mx-auto">
      <CardHeader>
        <CardTitle>Base Converter</CardTitle>
      </CardHeader>
      <CardContent>
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
        </Form>
      </CardContent>
      <CardFooter>
        <p>Result: {result}</p>
      </CardFooter>
    </Card>
  );
}
