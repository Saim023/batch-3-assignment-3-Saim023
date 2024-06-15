import httpStatus from "http-status";
import catchAsync from "../../utilities/catchAsync";
import sendResponse from "../../utilities/sendResponse";
import { UserServices } from "../user/user.service";
import { BikeServices } from "./bike.service";

// Create bike
const createBike = catchAsync(async (req, res) => {
	const result = await BikeServices.createBikeIntoDb(req.body);
	sendResponse(res, {
		statusCode: httpStatus.OK,
		success: true,
		message: "Bike added successfully!",
		data: result
	});
});
// Get all bikes
const getAllBikes = catchAsync(async (req, res) => {
	const result = await BikeServices.getAllBikesFromDb();
	sendResponse(res, {
		statusCode: httpStatus.OK,
		success: true,
		message: "Bikes retrieved successfully!",
		data: result
	});
});

// Update bike
const updateBike = catchAsync(async (req, res) => {
	const { id } = req.params;
	const { pricePerHour } = req.body;

	const result = await BikeServices.updateBikeIntoDB(id, pricePerHour);
	sendResponse(res, {
		statusCode: httpStatus.OK,
		success: true,
		message: "Bike updated successfully",
		data: result
	});
});

// Delete bike
const deleteBike = catchAsync(async (req, res) => {
	const { id } = req.params;
	const result = await BikeServices.deleteBikeFromDB(id);
	sendResponse(res, {
		statusCode: httpStatus.OK,
		success: true,
		message: "Bike deleted successfully",
		data: result
	});
});

export const BikeControllers = {
	createBike,
	getAllBikes,
	updateBike,
	deleteBike
};
