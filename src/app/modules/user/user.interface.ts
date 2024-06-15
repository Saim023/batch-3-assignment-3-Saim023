import { Model } from "mongoose";
import { USER_ROLE } from "./user.constant";

export interface TUser extends Document {
	name: string;
	email: string;
	password: string;
	phone: string;
	address: string;
	role: "admin" | "user";
}
export interface TUpdateUser {
	name?: string;
	email?: string;
	password?: string;
	phone?: string;
	address?: string;
	role?: "admin" | "user";
}

export interface UserModel extends Model<TUser> {
	isUserExistByEmail(email: string): Promise<TUser>;

	isPasswordMatched(plainTextPassword: string, hashedPassword: string): Promise<boolean>;
}

export type TUserRole = keyof typeof USER_ROLE;
