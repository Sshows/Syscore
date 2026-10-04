import { z } from "zod";
const clean = (value: string) =>
  value.replace(/[\u0000-\u001f\u007f]/g, " ").trim();
export const leadTopics = [
  "incident",
  "forensics",
  "osint",
  "security",
  "education",
] as const;
export const leadSchema = z.strictObject({
  name: z.string().max(100).transform(clean).pipe(z.string().min(2)),
  phone: z
    .string()
    .trim()
    .max(30)
    .regex(/^\+?[\d\s()-]{8,30}$/)
    .refine((value) => value.replace(/\D/g, "").length >= 8),
  topic: z.enum(leadTopics),
  message: z.string().max(1200).transform(clean),
  consent: z.literal(true),
  website: z.string().max(200).default(""),
  captchaToken: z.string().min(1).max(2048),
});
export type Lead = z.infer<typeof leadSchema>;
export type LeadMessage = Omit<Lead, "website" | "captchaToken">;
