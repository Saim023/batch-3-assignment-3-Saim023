import httpStatus from "http-status";
import catchAsync from "../../utilities/catchAsync";
import sendResponse from "../../utilities/sendResponse";
import { BookingServices } from "./booking.service";

// Create booking
const createBooking = catchAsync(async (req, res) => {
	const { bikeId, startTime } = req.body;

	const token = req.headers.authorization?.split(" ")[1];

	if (!token) {
		throw new Error("Token not found");
	}

	const result = await BookingServices.createBookingIntoDB({ bikeId, startTime, token });
	sendResponse(res, {
		statusCode: httpStatus.OK,
		success: true,
		message: "Rental created successfully",
		data: result
	});
});

export const BookingControllers = {
	createBooking
};
