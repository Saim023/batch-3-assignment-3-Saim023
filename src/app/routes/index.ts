import Router from "express";
import { UserRoutes } from "../modules/user/user.route";
import { AuthRoutes } from "../modules/Auth/auth.route";
import { BikeRoutes } from "../modules/bike/bike.route";
import { BookingRoutes } from "../modules/booking/booking.route";

const router = Router();

const moduleRoutes = [
	{
		path: "/",
		route: UserRoutes
	},
	{
		path: "/auth",
		route: AuthRoutes
	},
	{
		path: "/",
		route: BikeRoutes
	},
	{
		path: "/",
		route: BookingRoutes
	}
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
