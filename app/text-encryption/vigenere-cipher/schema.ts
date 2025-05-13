import { z } from "zod";

export const vigenereCipherSchema = z.object({
    action: z.string(),
    key: z.string().regex(/^[A-Za-z]+$/, {
        message: "Only letters are allowed",
    }),
    text: z.string().regex(/^[A-Za-z]+$/, {
        message: "Only letters are allowed",
    }),
})