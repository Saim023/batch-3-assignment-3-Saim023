import mongoose, { Schema } from "mongoose";
import { TBike } from "./bike.interface";

const createBikeSchema = new Schema<TBike>(
	{
		name: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		},
		pricePerHour: {
			type: Number,
			required: true
		},
		isAvailable: {
			type: Boolean,
			default: true
		},
		cc: {
			type: Number,
			required: true
		},
		year: {
			type: Number,
			required: true
		},
		model: {
			type: String,
			required: true
		},
		brand: {
			type: String,
			required: true
		}
	},
	{
		timestamps: true
	}
);

export const BikeModel = mongoose.model<TBike>("Bike", createBikeSchema);
