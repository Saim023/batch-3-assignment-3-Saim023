import { UpdateQuery } from "mongoose";
import sendResponse from "../../utilities/sendResponse";
import { TUpdateUser, TUser, TUserRole } from "./user.interface";
import { User } from "./user.model";
import { JwtPayload } from "jsonwebtoken";
import AppError from "../../errors/appError";
import httpStatus from "http-status";

// Create
const createUserIntoDb = async (payload: TUserRole) => {
	const result = await User.create(payload);
	return result;
};

// Create login
const createLoginIntoDb = async (payload: TUserRole) => {
	const result = await User.create(payload);
	return result;
};

// Get user
const getUserFromDB = async () => {
	const result = await User.findOne();
	return result;
};

// Update user

const updateUserIntoDB = async (id: string, payload: Partial<TUser>) => {
	const result = await User.findByIdAndUpdate({ _id: id }, payload, {
		new: true,
		runValidators: true
	});
	if (!result) {
		throw new AppError(httpStatus.NOT_FOUND, "User not found");
	}
	return result;
};

export const UserServices = {
	createUserIntoDb,
	createLoginIntoDb,
	getUserFromDB,
	updateUserIntoDB
};
