import { z } from "zod";

import { caesarCipherSchema } from "./caesarCipherSchema";

export function caesarEncrypt(values: z.infer<typeof caesarCipherSchema>) {
  const { action, shift, text } = values;

  const result = text
    .split("")
    .map((char) => {
      const firstCharCode = char.toUpperCase() === char ? 65 : 97;
      return String.fromCharCode(
        // ((char.charCodeAt(0) - firstCharCode + input.shift) % 26) + firstCharCode
        // The above line is the original Caesar cipher logic
        ((char.charCodeAt(0) -
          firstCharCode +
          130 +
          ((shift * (action === "encrypt" ? 1 : -1)) % 26)) %
          26) +
        firstCharCode
      );
    })
    .join("");

  return result;
}
