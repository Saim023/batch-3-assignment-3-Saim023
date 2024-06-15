"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidations = void 0;
const zod_1 = require("zod");
const createUserValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        email: zod_1.z.string().email(),
        password: zod_1.z.string().max(20),
        phone: zod_1.z.string(),
        address: zod_1.z.string(),
        role: zod_1.z.enum(["admin", "user"])
    })
});
const updateUserValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        email: zod_1.z.string().email().optional(),
        password: zod_1.z.string().max(20).optional(),
        phone: zod_1.z.string().optional(),
        address: zod_1.z.string().optional(),
        role: zod_1.z.enum(["admin", "user"]).optional()
    })
});
exports.UserValidations = { createUserValidationSchema, updateUserValidationSchema };
