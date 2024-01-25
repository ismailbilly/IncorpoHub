"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentClient = void 0;
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
aws_sdk_1.default.config.update({
    region: process.env.AWS_DEFAULT_REGION,
    accessKeyId: "AKIAS7SWZBAJLLKZD7XU",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_ID,
});
exports.DocumentClient = new aws_sdk_1.default.DynamoDB.DocumentClient();
