import { z } from "zod";

export const step2Schema = z.object({
  subjects: z.string().min(1, "Please enter at least one subject"),
  goal: z.string().min(1, "Select a goal"),
  hours: z.number().min(1, "Enter weekly hours"),
  scholarship: z.boolean(),
  percentage: z.number().min(0).max(100).optional(),
  achievements: z.string().optional(),
}).refine(
  data => !data.scholarship || data.percentage !== undefined,
  {
    message: "Percentage required for scholarship",
    path: ["percentage"],
  }
);
