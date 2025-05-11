"use server";

export async function vigenereEncrypt(formData: FormData) {
  const input = {
    text: formData.get("text") as string,
    key: formData.get("key") as string,
    action: formData.get("action") as string,
  };

  const encryptedText = input.text
    .split("")
    .map((char, index) => {
      const firstCharCode = char.toUpperCase() === char ? 65 : 97;
      const shift = input.key[index % input.key.length].toUpperCase().charCodeAt(0) - 65;

      return String.fromCharCode(
        ((char.charCodeAt(0) -
          firstCharCode +
          130 +
          ((shift * (input.action === "encrypt" ? 1 : -1)) % 26)) %
          26) +
        firstCharCode
      );
    })
    .join("");

  return encryptedText;
}
