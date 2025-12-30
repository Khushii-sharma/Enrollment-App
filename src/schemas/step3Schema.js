import { z } from "zod";

export const step3Schema = z.object({
  pin: z.string().regex(/^\d{6}$/, "Enter a valid 6-digit PIN code"),
  state: z.string().min(2, "Enter state name"),
  city: z.string().min(2, "Enter city name"),
  address: z.string().min(10, "Address must be at least 10 characters"),
  guardianName: z.string().min(2, "Enter guardian's full name"),
  guardianMobile: z.string().regex(/^[6-9]\d{9}$/, "Enter valid 10-digit mobile number"),
  
  // Custom messages for dropdowns
  plan: z.string().min(1, "Please select a subscription plan"),
  payment: z.string().min(1, "Please select a payment mode"),
});