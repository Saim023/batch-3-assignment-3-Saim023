import express from "express";
import { BikeControllers } from "./bike.controller";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constant";

const router = express.Router();

router.post("/bikes", auth(USER_ROLE.admin), BikeControllers.createBike);

router.get("/bikes", BikeControllers.getAllBikes);

router.put("/bikes/:id", BikeControllers.updateBike);

router.delete("/bikes/:id", BikeControllers.deleteBike);

export const BikeRoutes = router;
