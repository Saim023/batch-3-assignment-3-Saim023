"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeRoutes = void 0;
const express_1 = __importDefault(require("express"));
const bike_controller_1 = require("./bike.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_constant_1 = require("../user/user.constant");
const router = express_1.default.Router();
router.post("/bikes", (0, auth_1.default)(user_constant_1.USER_ROLE.admin), bike_controller_1.BikeControllers.createBike);
router.get("/bikes", bike_controller_1.BikeControllers.getAllBikes);
router.put("/bikes/:id", bike_controller_1.BikeControllers.updateBike);
router.delete("/bikes/:id", bike_controller_1.BikeControllers.deleteBike);
exports.BikeRoutes = router;
