import mongoose, { Schema } from "mongoose";
import { TBooking } from "./booking.interface";

// Create the Booking schema
const createBookingSchema = new Schema<TBooking>({
	userId: {
		type: String,
		ref: "User",
		required: true
	},
	bikeId: {
		type: String,
		ref: "Bike",
		required: true
	},
	startTime: {
		type: Date,
		required: true
	},
	returnTime: {
		type: Date,
		required: true
	},
	totalCost: {
		type: Number,
		required: true
	},
	isReturned: {
		type: Boolean,
		default: false
	}
});

// Booking model
export const BookingModel = mongoose.model<TBooking>("Booking", createBookingSchema);
