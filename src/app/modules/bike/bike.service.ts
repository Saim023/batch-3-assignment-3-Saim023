import httpStatus from "http-status";
import AppError from "../../errors/appError";
import { TBike } from "./bike.interface";
import { BikeModel } from "./bike.model";
import mongoose from "mongoose";

// Create
const createBikeIntoDb = async (payload: TBike) => {
	const result = await BikeModel.create(payload);
	return result;
};
// Get all
const getAllBikesFromDb = async () => {
	const result = await BikeModel.find();
	return result;
};

// Update
const updateBikeIntoDB = async (id: string, pricePerHour: number) => {
	const updatedBike = await BikeModel.findByIdAndUpdate({ _id: id }, { pricePerHour }, { new: true });

	if (!updatedBike) {
		throw new AppError(httpStatus.NOT_FOUND, "Bike not found !");
	}
	return updatedBike;
};

// Delete Bike
const deleteBikeFromDB = async (id: string) => {
	const session = await mongoose.startSession();

	try {
		session.startTransaction();

		const deletedBike = await BikeModel.findByIdAndUpdate(id, { isAvailable: false }, { new: true, session });

		if (!deletedBike) {
			throw new AppError(httpStatus.BAD_REQUEST, "Failed to delete bike");
		}

		await session.commitTransaction();
		await session.endSession();

		return deletedBike;
	} catch (err: any) {
		await session.abortTransaction();
		await session.endSession();
		throw new Error(err);
	}
};

export const BikeServices = {
	createBikeIntoDb,
	getAllBikesFromDb,
	updateBikeIntoDB,
	deleteBikeFromDB
};
