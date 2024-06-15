"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingValidations = exports.updateBookingValidationSchema = exports.createBookingValidationSchema = void 0;
const zod_1 = require("zod");
exports.createBookingValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.string(),
        bikeId: zod_1.z.string(),
        startTime: zod_1.z.date(),
        returnTime: zod_1.z.date(),
        totalCost: zod_1.z.number(),
        isReturned: zod_1.z.boolean()
    })
});
exports.updateBookingValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.string().optional(),
        bikeId: zod_1.z.string().optional(),
        startTime: zod_1.z.date().optional(),
        returnTime: zod_1.z.date().optional(),
        totalCost: zod_1.z.number().optional(),
        isReturned: zod_1.z.boolean().optional()
    })
});
exports.BookingValidations = {
    createBookingValidationSchema: exports.createBookingValidationSchema,
    updateBookingValidationSchema: exports.updateBookingValidationSchema
};
