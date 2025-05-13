import { z } from "zod";

export const baseConverterSchema = z.object({
    fromBase: z.coerce
        .number()
        .min(2, { message: "From base must be at least 2" })
        .max(36, { message: "From base must be at most 36" }),
    number: z.string().regex(/^[a-zA-Z0-9]+$/, {
        message: "Only alphanumeric characters are allowed",
    }),
    toBase: z.coerce
        .number()
        .min(2, { message: "To base must be at least 2" })
        .max(36, { message: "To base must be at most 36" }),
})