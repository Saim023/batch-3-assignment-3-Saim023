import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
	NODE_ENV: process.env.NODE_ENV,
	port: process.env.PORT,
	database_url: process.env.DATABASE_URL,
	bcrypt_salt: process.env.BCRYPT_SALT,
	default_password: process.env.DEFAULT_PASS,
	jwt_access_token: process.env.JWT_ACCESS_TOKEN,
	jwt_expires_in: process.env.JWT_EXPIRES_IN
};
