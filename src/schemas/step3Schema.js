import { z } from "zod";

export const step3Schema = z.object({
  pin: z.string().regex(/^\d{6}$/),
  state: z.string().min(2),
  city: z.string().min(2),
  address: z.string().min(10),
  guardianName: z.string().min(2),
  guardianMobile: z.string().regex(/^[6-9]\d{9}$/),
  plan: z.enum(["Quarterly", "Half-Yearly", "Annual"]),
  payment: z.enum(["UPI", "Card", "NetBanking"]),
});
