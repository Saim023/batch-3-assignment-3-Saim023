import { z } from "zod";

export const createBookingValidationSchema = z.object({
	body: z.object({
		userId: z.string(),
		bikeId: z.string(),
		startTime: z.date(),
		returnTime: z.date(),
		totalCost: z.number(),
		isReturned: z.boolean()
	})
});

export const updateBookingValidationSchema = z.object({
	body: z.object({
		userId: z.string().optional(),
		bikeId: z.string().optional(),
		startTime: z.date().optional(),
		returnTime: z.date().optional(),
		totalCost: z.number().optional(),
		isReturned: z.boolean().optional()
	})
});

export const BookingValidations = {
	createBookingValidationSchema,
	updateBookingValidationSchema
};
