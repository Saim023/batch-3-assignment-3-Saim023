import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import config from "../../config";
import { TUser, UserModel } from "./user.interface";

const userSchema = new Schema<TUser, UserModel>(
	{
		name: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true,
			unique: true
		},
		password: {
			type: String,
			required: true
		},
		phone: {
			type: String,
			required: true
		},
		address: {
			type: String,
			required: true
		},
		role: {
			type: String,
			required: true,
			enum: ["admin", "user"]
		}
	},
	{
		timestamps: true
	}
);

userSchema.pre("save", async function (next) {
	const user = this;

	user.password = await bcrypt.hash(user.password, Number(config.bcrypt_salt));

	next();
});

userSchema.post("save", function (doc, next) {
	doc.password = "";
	next();
});

userSchema.statics.isUserExistByEmail = async function (email: string) {
	return await User.findOne({ email }).select("+password");
};

userSchema.statics.isPasswordMatched = async function (plainTextPassword, hashedPassword) {
	return await bcrypt.compare(plainTextPassword, hashedPassword);
};

export const User = model<TUser, UserModel>("User", userSchema);
