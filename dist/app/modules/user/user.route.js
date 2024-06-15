"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validationRequest_1 = __importDefault(require("../../middlewares/validationRequest"));
const user_zod_validation_1 = require("./user.zod.validation");
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
// Signup
router.post("/auth/signup", (0, validationRequest_1.default)(user_zod_validation_1.UserValidations.createUserValidationSchema), user_controller_1.UserControllers.createUser);
// Get user
router.get("/users/me", user_controller_1.UserControllers.getUser);
// Update user
router.put("/users/me/:id", user_controller_1.UserControllers.updateUser);
exports.UserRoutes = router;
