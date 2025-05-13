"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import FormInput from "@/components/FormInput";
import FormRadio from "@/components/FormRadio";
import { SubmitButton } from "@/components/SubmitButton";
import { Form, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup } from "@/components/ui/radio-group";

import { vigenereCipherSchema } from "./schema";
import { vigenereEncrypt } from "./utils";

export default function VigenereCipher() {
  const [result, setResult] = useState("");

  const form = useForm<z.infer<typeof vigenereCipherSchema>>({
    defaultValues: {
      action: "encrypt",
      key: "",
      text: "",
    },
    resolver: zodResolver(vigenereCipherSchema),
  });

  const onSubmit = (values: z.infer<typeof vigenereCipherSchema>) => {
    const result = vigenereEncrypt(values);

    setResult(result);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormInput label="Text">
              <Input placeholder="Enter text to encrypt/decrypt" {...field} />
            </FormInput>
          )}
        />
        <FormField
          control={form.control}
          name="key"
          render={({ field }) => (
            <FormInput label="Key">
              <Input
                placeholder="Enter key for encryption/decryption"
                {...field}
              />
            </FormInput>
          )}
        />
        <FormField
          control={form.control}
          name="action"
          render={({ field }) => (
            <FormInput label="Action">
              <RadioGroup
                className="flex"
                defaultValue={field.value}
                onValueChange={field.onChange}
              >
                <FormRadio label="Encrypt" value="encrypt" />
                <FormRadio label="Decrypt" value="decrypt" />
              </RadioGroup>
            </FormInput>
          )}
        />
        <SubmitButton />
      </form>
      <p>Result: {result}</p>
    </Form>
  );
}
