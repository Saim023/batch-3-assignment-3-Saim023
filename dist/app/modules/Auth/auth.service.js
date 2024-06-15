"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const appError_1 = __importDefault(require("../../errors/appError"));
const user_model_1 = require("../user/user.model");
const config_1 = __importDefault(require("../../config"));
const auth_utilities_1 = require("./auth.utilities");
const loginUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(payload);
    const user = yield user_model_1.User.isUserExistByEmail(payload.email);
    // console.log(user);
    if (!user) {
        throw new appError_1.default(http_status_1.default.NOT_FOUND, "User not found !");
    }
    if (!(yield user_model_1.User.isPasswordMatched(payload === null || payload === void 0 ? void 0 : payload.password, user === null || user === void 0 ? void 0 : user.password)))
        throw new appError_1.default(http_status_1.default.FORBIDDEN, "Password didn't match");
    //Create token
    const jwtPayload = {
        email: user.email,
        role: user.role
    };
    console.log(jwtPayload);
    const accessToken = yield (0, auth_utilities_1.createToken)(jwtPayload, config_1.default.jwt_access_token, config_1.default.jwt_expires_in);
    return {
        accessToken
    };
});
exports.AuthServices = {
    loginUser
};
