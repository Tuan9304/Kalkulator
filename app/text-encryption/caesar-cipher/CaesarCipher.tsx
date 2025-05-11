"use client";

import { useState } from "react";
import { caesarEncrypt } from "./actions";
import { SubmitButton } from "@/components/SubmitButton";

export default function CaesarCipher() {
  const [text, setText] = useState("");
  const [shift, setShift] = useState("");
  const [action, setAction] = useState("encrypt");
  const [result, setResult] = useState("");

  return (
    <>
      <form
        className=""
        action={async (formData: FormData) => {
          const updatedResult = await caesarEncrypt(formData);
          setResult(updatedResult);
        }}
      >
        <label>
          <span>Text</span>
          <input
            name="text"
            required
            type="text"
            pattern="[A-Z]+"
            title="Only uppercase letters are allowed"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <label>
          <span>Shift</span>
          <input
            name="shift"
            required
            type="text"
            pattern="^-?\d+$"
            title="Only integers are allowed"
            value={shift}
            onChange={(e) => setShift(e.target.value)}
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
