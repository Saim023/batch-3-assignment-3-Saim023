"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingServices = void 0;
const bike_model_1 = require("../bike/bike.model");
const config_1 = __importDefault(require("../../config"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const booking_model_1 = require("./booking.model");
const createBookingIntoDB = (_a) => __awaiter(void 0, [_a], void 0, function* ({ bikeId, startTime, token }) {
    const bike = yield bike_model_1.BikeModel.findById(bikeId);
    if (!bike || !bike.isAvailable) {
        throw new Error("Bike is not available");
    }
    let myToken = config_1.default.jwt_access_token;
    if (myToken && myToken.startsWith("Bearer")) {
        myToken = myToken.split(" ")[1];
    }
    const decodedToken = jsonwebtoken_1.default.verify(token, myToken);
    const userId = decodedToken.id;
    console.log(userId);
    const newRental = new booking_model_1.BookingModel({
        userId,
        bikeId,
        startTime,
        returnTime: null,
        totalCost: 0,
        isReturned: false
    });
    const savedRental = yield newRental.save();
    bike.isAvailable = false;
    yield bike.save();
    console.log(savedRental);
});
exports.BookingServices = {
    createBookingIntoDB
};
