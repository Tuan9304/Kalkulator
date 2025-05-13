import { z } from "zod";

import { vigenereCipherSchema } from "./schema";

export function vigenereEncrypt(values: z.infer<typeof vigenereCipherSchema>) {
  const { action, key, text } = values;

  const result = text
    .split("")
    .map((char, index) => {
      const firstCharCode = char.toUpperCase() === char ? 65 : 97;
      const shift = key[index % key.length].toUpperCase().charCodeAt(0) - 65;

      return String.fromCharCode(
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
