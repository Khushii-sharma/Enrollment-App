import { z } from "zod";

export const step1Schema = z.object({
  fullName: z
    .string()
    .min(1, "Full Name is required")
    .regex(/^[a-zA-Z ]+$/, "Only alphabets are allowed"),
  
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  
  mobile: z.string().regex(/^[6-9]\d{9}$/, "Enter valid 10-digit number"),

  // Using string().min(1) is the safest way to show a custom message for dropdowns
  class: z.string().min(1, "Please select a class"),
  
  board: z.string().min(1, "Please select a board"),
  
  language: z.string().min(1, "Please select a language"),
});