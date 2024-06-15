import httpStatus from "http-status";
import AppError from "../../errors/appError";
import { User } from "../user/user.model";
import { TLoginUser } from "./auth.interface";
import config from "../../config";
import { createToken } from "./auth.utilities";

const loginUser = async (payload: TLoginUser) => {
	console.log(payload);

	const user = await User.isUserExistByEmail(payload.email);
	// console.log(user);

	if (!user) {
		throw new AppError(httpStatus.NOT_FOUND, "User not found !");
	}

	if (!(await User.isPasswordMatched(payload?.password, user?.password)))
		throw new AppError(httpStatus.FORBIDDEN, "Password didn't match");

	//Create token

	const jwtPayload = {
		email: user.email,
		role: user.role
	};

	console.log(jwtPayload);

	const accessToken = await createToken(jwtPayload, config.jwt_access_token as string, config.jwt_expires_in as string);
	return {
		accessToken
	};
};

export const AuthServices = {
	loginUser
};
