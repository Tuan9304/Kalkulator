"use client";

import { useState } from "react";
import { caesarEncrypt } from "./actions";
import { SubmitButton } from "@/components/SubmitButton";

export default function CaesarCipher() {
  const [text, setText] = useState("");
  const [shift, setShift] = useState("");
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
            type="number"
            pattern="\d+"
            title="Only integers are allowed"
            value={shift}
            onChange={(e) => setShift(e.target.value)}
          />
        </label>
        <SubmitButton />
      </form>
      <p>Result: {result}</p>
    </>
  );
}
