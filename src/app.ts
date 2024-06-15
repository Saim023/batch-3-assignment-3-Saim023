/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import globalErrorHandlers from "./app/middlewares/globalErrorHandler";

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// Application routes
app.use("/api", router);

const testing = async (req: Request, res: Response) => {
	Promise.reject();
};

app.get("/", testing);

// Global error
app.use(globalErrorHandlers);

export default app;
