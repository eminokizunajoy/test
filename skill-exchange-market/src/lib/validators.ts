import { z } from "zod";

export const registerSchema = z.object({
  username: z.string().min(3).max(30),
  email: z.string().email(),
  password: z.string().min(8).max(100)
});

export const updateProfileSchema = z.object({
  displayName: z.string().min(1).max(60).optional().or(z.literal("")),
  image: z.string().url().optional().or(z.literal("")),
  grade: z.string().min(1).max(60).optional().or(z.literal("")),
  department: z.string().min(1).max(120).optional().or(z.literal("")),
  bio: z.string().max(2000).optional().or(z.literal(""))
});

