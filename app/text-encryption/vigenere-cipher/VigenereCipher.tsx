"use client";

import { useState } from "react";
import { vigenereEncrypt } from "./actions";
import { SubmitButton } from "@/components/SubmitButton";

export default function VigenereCipher() {
  const [text, setText] = useState("");
  const [key, setKey] = useState("");
  const [action, setAction] = useState("encrypt");
  const [result, setResult] = useState("");

  return (
    <>
      <form
        className=""
        action={async (formData: FormData) => {
          const updatedResult = await vigenereEncrypt(formData);
          setResult(updatedResult);
        }}
      >
        <label>
          <span>Text</span>
          <input
            name="text"
            required
            type="text"
            pattern="[A-Za-z]+"
            title="Only letters are allowed"
            placeholder="Enter text to encrypt/decrypt"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <label>
          <span>Key</span>
          <input
            name="key"
            required
            type="text"
            pattern="[A-Za-z]+"
            title="Only letters are allowed"
            placeholder="Enter key for encryption/decryption"
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
        </label>
        <div className="flex gap-6 mt-2 my-3 px-2 py-1">
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="action"
              value="encrypt"
              defaultChecked={action === "encrypt"}
              onChange={(e) => setAction(e.target.value)}
            />
            <label htmlFor="encrypt">Encrypt</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="action"
              value="decrypt"
              defaultChecked={action === "decrypt"}
              onChange={(e) => setAction(e.target.value)}
            />
            <label htmlFor="decrypt">Decrypt</label>
          </div>
        </div>
        <SubmitButton />
      </form>
      <p>Result: {result}</p>
    </>
  );
}
