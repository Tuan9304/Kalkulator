"use client";

import { useState } from "react";
import { baseConvert } from "./actions";
import { SubmitButton } from "@/components/SubmitButton";

export default function BaseConverter() {
  const [number, setNumber] = useState("");
  const [fromBase, setFromBase] = useState("");
  const [toBase, setToBase] = useState("");
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
          <input
            name="number"
            required
            type="text"
            pattern="[a-zA-Z0-9]+"
            title="Only alphanumeric characters are allowed"
            placeholder="Enter number to convert"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </label>
        <label>
          <span>From Base</span>
          <input
            name="fromBase"
            required
            type="number"
            min="2"
            max="36"
            value={fromBase}
            placeholder="Enter base of the number"
            onChange={(e) => setFromBase(e.target.value)}
          />
        </label>
        <label>
          <span>To Base</span>
          <input
            name="toBase"
            required
            type="number"
            min="2"
            max="36"
            value={toBase}
            placeholder="Enter base to convert to"
            onChange={(e) => setToBase(e.target.value)}
          />
        </label>
        <SubmitButton />
      </form>
      <p>Result: {result}</p>
    </>
  );
}
