import { z } from "zod";

const createUserValidationSchema = z.object({
	body: z.object({
		name: z.string(),
		email: z.string().email(),
		password: z.string().max(20),
		phone: z.string(),
		address: z.string(),
		role: z.enum(["admin", "user"])
	})
});

const updateUserValidationSchema = z.object({
	body: z.object({
		name: z.string().optional(),
		email: z.string().email().optional(),
		password: z.string().max(20).optional(),
		phone: z.string().optional(),
		address: z.string().optional(),
		role: z.enum(["admin", "user"]).optional()
	})
});

export const UserValidations = { createUserValidationSchema, updateUserValidationSchema };
