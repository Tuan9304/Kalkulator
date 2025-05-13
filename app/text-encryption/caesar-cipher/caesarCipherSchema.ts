import { z } from "zod";

export const caesarCipherSchema = z.object({
    action: z.string(),
    shift: z.coerce
        .number()
        .int({ message: "Only integers are allowed" }),
    text: z.string().regex(/^[A-Za-z]+$/, {
        message: "Only letters are allowed",
    }),
})