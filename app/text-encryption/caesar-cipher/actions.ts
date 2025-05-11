"use server";

export async function caesarEncrypt(formData: FormData) {
  const input = {
    text: formData.get("text") as string,
    shift: parseInt(formData.get("shift") as string),
    action: formData.get("action") as string,
  };

  const encryptedText = input.text
    .split("")
    .map((char) => {
      const firstCharCode = char.toUpperCase() === char ? 65 : 97;
      return String.fromCharCode(
        // ((char.charCodeAt(0) - firstCharCode + input.shift) % 26) + firstCharCode
        // The above line is the original Caesar cipher logic
        ((char.charCodeAt(0) -
          firstCharCode +
          130 +
          ((input.shift * (input.action === "encrypt" ? 1 : -1)) % 26)) %
          26) +
        firstCharCode
      );
    })
    .join("");

  return encryptedText;
}
