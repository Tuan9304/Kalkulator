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
      return String.fromCharCode(
        // ((char.charCodeAt(0) - 'A' + input.shift) % 26) + 'A'
        ((char.charCodeAt(0) +
          39 +
          ((input.shift * (input.action === "encrypt" ? 1 : -1)) % 26)) %
          26) +
          65
      );
    })
    .join("");

  return encryptedText;
}
