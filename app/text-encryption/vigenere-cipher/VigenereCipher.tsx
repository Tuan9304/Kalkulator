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
    <Card className="max-w-sm bg-primary/5 mx-auto">
      <CardHeader>
        <CardTitle>Vigenère Cipher Encryption</CardTitle>
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
        </Form>
      </CardContent>
      <CardFooter>
        {result && <OutputWithCopy className="w-full" value={result} />}
      </CardFooter>
    </Card>
  );
}
