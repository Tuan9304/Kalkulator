"use server";

function validateInput(input: {
  number: string;
  fromBase: number;
  toBase: number;
}) {
  const validChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".slice(
    0,
    input.fromBase
  );
  const regex = new RegExp(`^[${validChars}]+$`, "i");

  if (!regex.test(input.number)) {
    throw new Error(
      `The number contains invalid characters for base ${input.fromBase}.`
    );
  }
}

export async function baseConvert(formData: FormData) {
  const input = {
    number: (formData.get("number") as string).toUpperCase(),
    fromBase: parseInt(formData.get("fromBase") as string),
    toBase: parseInt(formData.get("toBase") as string),
  };

  try {
    validateInput(input);
  } catch (error) {
    return (
      "Error: " +
      (error instanceof Error ? error.message : "An unknown error occurred")
    );
  }
  return parseInt(input.number, input.fromBase)
    .toString(input.toBase)
    .toUpperCase();
}
