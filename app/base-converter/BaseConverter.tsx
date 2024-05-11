"use client";

import { useState } from "react";
import { baseConvert } from "./actions";
import { SubmitButton } from "../components/SubmitButton";

export default function BaseConverter() {
  const [result, setResult] = useState("");

  return (
    <>
      <form
        className=""
        action={async (formData: FormData) => {
          const updatedResult = await baseConvert(formData);
          setResult(updatedResult);
        }}
      >
        <label>
          <span>Number</span>
          <input name="number" required type="text" pattern="[a-zA-Z0-9]+" />
        </label>
        <label>
          <span>From Base</span>
          <input name="fromBase" required type="number" min="2" max="36" />
        </label>
        <label>
          <span>To Base</span>
          <input name="toBase" required type="number" min="2" max="36" />
        </label>
        <SubmitButton />
      </form>
      <p>Result: {result}</p>
    </>
  );
}
