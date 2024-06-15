import { BikeModel } from "../bike/bike.model";
import config from "../../config";
import jwt from "jsonwebtoken";
import { BookingModel } from "./booking.model";

const createBookingIntoDB = async ({ bikeId, startTime, token }: any) => {
	const bike = await BikeModel.findById(bikeId);
	if (!bike || !bike.isAvailable) {
		throw new Error("Bike is not available");
	}

	let myToken = config.jwt_access_token;

	if (myToken && myToken.startsWith("Bearer")) {
		myToken = myToken.split(" ")[1];
	}

	const decodedToken: any = jwt.verify(token, myToken as string);

	const userId = decodedToken.id;
	console.log(userId);

	const newRental = new BookingModel({
		userId,
		bikeId,
		startTime,
		returnTime: null,
		totalCost: 0,
		isReturned: false
	});
	const savedRental = await newRental.save();
	bike.isAvailable = false;
	await bike.save();

	console.log(savedRental);
};

export const BookingServices = {
	createBookingIntoDB
};
