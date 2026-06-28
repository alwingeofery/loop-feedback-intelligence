import { z } from "zod";

export const feedbackSchema = z.object({
  title: z.string().min(2),
  content: z.string().min(5),
  source: z.enum(["CSV", "MANUAL", "API"]).default("MANUAL")
});

