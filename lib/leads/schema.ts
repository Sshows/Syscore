import { z } from "zod";
import { experience } from "@/content/site-content";
const clean = (value: string) =>
  value.replace(/[\u0000-\u001f\u007f]/g, " ").trim();
export const leadSchema = z.object({
  name: z.string().max(100).transform(clean).pipe(z.string().min(2)),
  phone: z
    .string()
    .trim()
    .max(30)
    .regex(/^\+?[\d\s()-]{8,30}$/)
    .refine((value) => value.replace(/\D/g, "").length >= 8),
  topic: z.enum(
    experience.directions.map((item) => item.id) as [
      "incident",
      "forensics",
      "security",
      "education",
    ],
  ),
  message: z.string().max(1200).transform(clean),
  consent: z.literal(true),
  website: z.string().max(200).default(""),
});
export type Lead = z.infer<typeof leadSchema>;
