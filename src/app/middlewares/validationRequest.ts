import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import catchAsync from "../utilities/catchAsync";

const validationRequest = (schema: AnyZodObject) => {
	return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
		// data validation using zod
		await schema.parseAsync({
			body: req.body
		});
		next();
	});
};

export default validationRequest;
