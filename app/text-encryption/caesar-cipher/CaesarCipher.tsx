"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import FormInput from "@/components/FormInput";
import FormRadio from "@/components/FormRadio";
import OutputWithCopy from "@/components/OutputWithCopy";
import RadioInput from "@/components/RadioInput";
import SubmitButton from "@/components/SubmitButton";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";

import { caesarCipherSchema } from "./schema";
import { caesarEncrypt } from "./utils";

export default function CaesarCipher() {
  const [result, setResult] = useState("");

  const form = useForm<z.infer<typeof caesarCipherSchema>>({
    defaultValues: {
      action: "encrypt",
      shift: 0,
      text: "",
    },
    resolver: zodResolver(caesarCipherSchema),
  });

  const onSubmit = (values: z.infer<typeof caesarCipherSchema>) => {
    const result = caesarEncrypt(values);

    setResult(result);
  };

  return (
    <Card className="max-w-sm bg-slate-100 mx-auto">
      <CardHeader>
        <CardTitle>Caesar Cipher Encryption</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormInput
              label="Text"
              name="text"
              placeholder="Enter text to encrypt/decrypt"
            />
            <FormInput
              label="Shift"
              name="shift"
              placeholder="Enter number of shifts right"
              type="number"
            />
            <FormRadio label="Action" name="action">
              <RadioInput label="Encrypt" value="encrypt" />
              <RadioInput label="Decrypt" value="decrypt" />
            </FormRadio>
            <SubmitButton />
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        {result && <OutputWithCopy className="w-full" value={result} />}
      </CardFooter>
    </Card>
  );
}
