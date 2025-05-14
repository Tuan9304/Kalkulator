"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import FormInput from "@/components/FormInput";
import FormRadio from "@/components/FormRadio";
import RadioInput from "@/components/RadioInput";
import { SubmitButton } from "@/components/SubmitButton";
import { Form } from "@/components/ui/form";

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
        <FormInput
          label="Text"
          name="text"
          placeholder="Enter text to encrypt/decrypt"
        />
        <FormInput
          label="Key"
          name="key"
          placeholder="Enter key for encryption/decryption"
        />
        <FormRadio label="Action" name="action">
          <RadioInput label="Encrypt" value="encrypt" />
          <RadioInput label="Decrypt" value="decrypt" />
        </FormRadio>
        <SubmitButton />
      </form>
      <p>Result: {result}</p>
    </Form>
  );
}
