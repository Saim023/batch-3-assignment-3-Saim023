import express from "express";
import validationRequest from "../../middlewares/validationRequest";
import { AuthValidations } from "./auth.zod.validation";
import { AuthControllers } from "./auth.controller";

const router = express.Router();

router.post("/login", validationRequest(AuthValidations.loginValidationSchema), AuthControllers.loginUser);

export const AuthRoutes = router;
