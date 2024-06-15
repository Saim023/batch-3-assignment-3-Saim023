import sendResponse from "../../utilities/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utilities/catchAsync";
import { UserServices } from "./user.service";
import { RequestHandler } from "express";

// Create user
const createUser = catchAsync(async (req, res) => {
	const result = await UserServices.createUserIntoDb(req.body);
	sendResponse(res, {
		statusCode: httpStatus.OK,
		success: true,
		message: "User has been created successfully!",
		data: result
	});
});

// Create login
const createLogin = catchAsync(async (req, res) => {
	const result = await UserServices.createUserIntoDb(req.body);
	sendResponse(res, {
		statusCode: httpStatus.OK,
		success: true,
		message: "User logged in successfully",
		data: result
	});
});

// Get  users
const getUser: RequestHandler = catchAsync(async (req, res) => {
	const result = await UserServices.getUserFromDB();
	sendResponse(res, {
		statusCode: httpStatus.OK,
		success: true,
		message: "User profile retrieved successfully",
		data: result
	});
});

// Update

const updateUser = catchAsync(async (req, res) => {
	try {
		const { id } = req.params;
		const updatedData = req.body;

		const result = await UserServices.updateUserIntoDB(id, updatedData);

		if (!result) {
			return sendResponse(res, {
				statusCode: httpStatus.NOT_FOUND,
				success: false,
				message: "User not found",
				data: undefined
			});
		}

		sendResponse(res, {
			statusCode: httpStatus.OK,
			success: true,
			message: "Profile updated successfully",
			data: result
		});
	} catch (error) {
		sendResponse(res, {
			statusCode: httpStatus.INTERNAL_SERVER_ERROR,
			success: false,
			message: "An error occurred while updating the profile",
			data: undefined
		});
	}
});

export const UserControllers = {
	createUser,
	createLogin,
	getUser,
	updateUser
};
