import { NextFunction, Request, Response } from "express";
import catchAsync from "../utilities/catchAsync";
import AppError from "../errors/appError";
import httpStatus from "http-status";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
import { TUserRole } from "../modules/user/user.interface";

const auth = (...requiredRole: TUserRole[]) => {
	return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
		let token = req.headers.authorization;

		if (!token) {
			throw new AppError(httpStatus.UNAUTHORIZED, "Unauthorized Access!");
		}

		if (token && token.startsWith("Bearer")) {
			token = token.split(" ")[1];
		}

		// Verify token
		jwt.verify(token, config.jwt_access_token as string, function (err, decoded) {
			if (err) {
				throw new AppError(httpStatus.UNAUTHORIZED, "Unauthorized Access!");
			}

			const role = (decoded as JwtPayload).role;

			if (requiredRole && !requiredRole.includes(role)) {
				throw new AppError(httpStatus.UNAUTHORIZED, "Unauthorized Access!");
			}

			req.user = decoded as JwtPayload;
			next();
		});
	});
};

export default auth;
