import { z } from "zod";

import { baseConverterSchema } from "./baseConverterSchema";

export function baseConvert(values: z.infer<typeof baseConverterSchema>) {
  const { fromBase, number, toBase } = values;

  try {
    validateInput(number, fromBase);
  } catch (error) {
    return (
      "Error: " +
      (error instanceof Error ? error.message : "An unknown error occurred")
    );
  }
  return parseInt(number, fromBase).toString(toBase).toUpperCase()
}

function validateInput(number: string, fromBase: number) {
  const validChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".slice(
    0,
    fromBase
  );
  const regex = new RegExp(`^[${validChars}]+$`, "i");

  if (!regex.test(number)) {
    throw new Error(
      `The number contains invalid characters for base ${fromBase}.`
    );
  }
}
