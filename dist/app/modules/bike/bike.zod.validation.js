"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidations = void 0;
const zod_1 = require("zod");
const bikeValidationSchema = zod_1.z.object({
    name: zod_1.z.string(),
    description: zod_1.z.string(),
    pricePerHour: zod_1.z.number(),
    isAvailable: zod_1.z.boolean().optional().default(true),
    cc: zod_1.z.number(),
    year: zod_1.z.number(),
    model: zod_1.z.string(),
    brand: zod_1.z.string()
});
exports.UserValidations = { bikeValidationSchema };
