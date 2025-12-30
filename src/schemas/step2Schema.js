import { z } from "zod";

export const step2Schema = z.object({
  subjects: z.string().min(1, "Please enter subjects"),
  goal: z.string().min(1, "Please select a goal"),
  
  // Coerce handles the conversion from string to number automatically
  hours: z.coerce
    .number({ 
      invalid_type_error: "Enter weekly hours", 
      required_error: "Enter weekly hours" 
    })
    .min(1, "Minimum 1 hour"),

  scholarship: z.boolean().default(false),

  // Optional number with coerce
  percentage: z.preprocess(
    (val) => (val === "" ? undefined : val),
    z.coerce
      .number({ invalid_type_error: "Enter percentage" })
      .min(0, "Min 0%")
      .max(100, "Max 100%")
      .optional()
  ),
}).refine(
  (data) => !data.scholarship || (data.percentage !== undefined && data.percentage !== null && !isNaN(data.percentage)),
  {
    message: "Percentage required for scholarship",
    path: ["percentage"],
  }
);