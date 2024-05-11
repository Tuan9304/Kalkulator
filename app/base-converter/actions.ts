"use server";

export async function baseConvert(formData: FormData) {
  const input = {
    number: formData.get("number") as string,
    fromBase: parseInt(formData.get("fromBase") as string),
    toBase: parseInt(formData.get("toBase") as string),
  };

  return parseInt(input.number, input.fromBase)
    .toString(input.toBase)
    .toUpperCase();
}
