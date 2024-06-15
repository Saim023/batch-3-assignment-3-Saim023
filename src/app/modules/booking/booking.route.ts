import express from "express";
import { BookingControllers } from "./booking.controller";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constant";

const router = express.Router();

router.post("/rentals", auth(USER_ROLE.admin), BookingControllers.createBooking);

export const BookingRoutes = router;
