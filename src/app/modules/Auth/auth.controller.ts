import catchAsync from "../../utilities/catchAsync";
import { AuthServices } from "./auth.service";

const loginUser = catchAsync(async (req, res) => {
	const result = await AuthServices.loginUser(req.body);
	// console.log(result);

	res.status(201).json({
		success: true,
		statusCode: 200,
		message: "User logged in succesfully!",
		data: result
	});
});

export const AuthControllers = {
	loginUser
};
