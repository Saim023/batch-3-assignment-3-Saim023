"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = require("../modules/user/user.route");
const auth_route_1 = require("../modules/Auth/auth.route");
const bike_route_1 = require("../modules/bike/bike.route");
const booking_route_1 = require("../modules/booking/booking.route");
const router = (0, express_1.default)();
const moduleRoutes = [
    {
        path: "/",
        route: user_route_1.UserRoutes
    },
    {
        path: "/auth",
        route: auth_route_1.AuthRoutes
    },
    {
        path: "/",
        route: bike_route_1.BikeRoutes
    },
    {
        path: "/",
        route: booking_route_1.BookingRoutes
    }
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
