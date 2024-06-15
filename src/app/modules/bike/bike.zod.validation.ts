import { z } from "zod";

const bikeValidationSchema = z.object({
	name: z.string(),
	description: z.string(),
	pricePerHour: z.number(),
	isAvailable: z.boolean().optional().default(true),
	cc: z.number(),
	year: z.number(),
	model: z.string(),
	brand: z.string()
});

export const UserValidations = { bikeValidationSchema };
