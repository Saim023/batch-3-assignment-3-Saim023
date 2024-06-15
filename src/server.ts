import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";
import { Server } from "http";

let server: Server;

async function main() {
	try {
		await mongoose.connect(config.database_url as string);
		server = app.listen(config.port, () => {
			console.log(`Server listening on port ${config.port} `);
		});
	} catch (error) {
		console.log(error);
	}
}

main();

// unhandledRejection
process.on("unhandledRejection", () => {
	console.log(`unhandledRejection is detected, and the server is sutting down... `);
	if (server) {
		server.close(() => {
			process.exit(1);
		});
	}
	process.exit(1);
});

// uncaughtExecption
process.on("uncaughtException", () => {
	console.log("uncaughtExecption is detected, the server is shutting down...");
	process.exit(1);
});
