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
exports.BikeServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const appError_1 = __importDefault(require("../../errors/appError"));
const bike_model_1 = require("./bike.model");
const mongoose_1 = __importDefault(require("mongoose"));
// Create
const createBikeIntoDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bike_model_1.BikeModel.create(payload);
    return result;
});
// Get all
const getAllBikesFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bike_model_1.BikeModel.find();
    return result;
});
// Update
const updateBikeIntoDB = (id, pricePerHour) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedBike = yield bike_model_1.BikeModel.findByIdAndUpdate({ _id: id }, { pricePerHour }, { new: true });
    if (!updatedBike) {
        throw new appError_1.default(http_status_1.default.NOT_FOUND, "Bike not found !");
    }
    return updatedBike;
});
// Delete Bike
const deleteBikeFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield mongoose_1.default.startSession();
    try {
        session.startTransaction();
        const deletedBike = yield bike_model_1.BikeModel.findByIdAndUpdate(id, { isAvailable: false }, { new: true, session });
        if (!deletedBike) {
            throw new appError_1.default(http_status_1.default.BAD_REQUEST, "Failed to delete bike");
        }
        yield session.commitTransaction();
        yield session.endSession();
        return deletedBike;
    }
    catch (err) {
        yield session.abortTransaction();
        yield session.endSession();
        throw new Error(err);
    }
});
exports.BikeServices = {
    createBikeIntoDb,
    getAllBikesFromDb,
    updateBikeIntoDB,
    deleteBikeFromDB
};
