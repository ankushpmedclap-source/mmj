import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z
    .string()
    .min(10, "Enter valid phone number")
    .max(15),
  terms: z.literal(true, {
    errorMap: () => ({ message: "You must accept terms" }),
  }),
});