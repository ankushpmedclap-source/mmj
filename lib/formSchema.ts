import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(10, "Enter valid phone number"),
  terms: z.literal(true).refine((val) => val === true, {
    message: "You must accept terms",
  }),
  marketing: z.boolean().optional(),
});

export type FormSchemaType = z.infer<typeof formSchema>;