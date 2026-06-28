import { z } from "zod";

export const reportSchema = z.object({
  title: z.string().min(2),
  summary: z.string().min(10)
});

