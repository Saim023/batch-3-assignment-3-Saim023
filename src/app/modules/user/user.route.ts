import express from "express";
import validationRequest from "../../middlewares/validationRequest";
import { UserValidations } from "./user.zod.validation";
import { UserControllers } from "./user.controller";

const router = express.Router();

// Signup
router.post("/auth/signup", validationRequest(UserValidations.createUserValidationSchema), UserControllers.createUser);

// Get user
router.get("/users/me", UserControllers.getUser);

// Update user
router.put("/users/me/:id", UserControllers.updateUser);

export const UserRoutes = router;
