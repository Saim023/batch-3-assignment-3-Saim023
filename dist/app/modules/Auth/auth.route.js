"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validationRequest_1 = __importDefault(require("../../middlewares/validationRequest"));
const auth_zod_validation_1 = require("./auth.zod.validation");
const auth_controller_1 = require("./auth.controller");
const router = express_1.default.Router();
router.post("/login", (0, validationRequest_1.default)(auth_zod_validation_1.AuthValidations.loginValidationSchema), auth_controller_1.AuthControllers.loginUser);
exports.AuthRoutes = router;
