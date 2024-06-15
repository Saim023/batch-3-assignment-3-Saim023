import { z } from "zod";

const loginValidationSchema = z.object({
	body: z.object({
		email: z.string({ required_error: "email required" }),
		password: z.string({ required_error: "Password required" })
	})
});

export const AuthValidations = {
	loginValidationSchema
};
