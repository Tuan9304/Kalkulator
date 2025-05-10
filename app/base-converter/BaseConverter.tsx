"use client";

import { useState } from "react";
import { baseConvert } from "./actions";
import { SubmitButton } from "../components/SubmitButton";

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
          try {
            const updatedResult = await baseConvert(formData);
            setResult(updatedResult);
          } catch (error) {
            setResult(
              "Error: " +
                (error instanceof Error
                  ? error.message
                  : "An unknown error occurred")
            );
          }
        }}
      >
        <label>
          <span>Number</span>
          <input
            name="number"
            required
            type="text"
            pattern="[a-zA-Z0-9]+"
            onInvalid={(e) =>
              (e.target as HTMLInputElement).setCustomValidity(
                "Invalid number format"
              )
            }
            onInput={(e) =>
              (e.target as HTMLInputElement).setCustomValidity("")
            }
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
            onChange={(e) => setToBase(e.target.value)}
          />
        </label>
        <SubmitButton />
      </form>
      <p>Result: {result}</p>
    </>
  );
}
