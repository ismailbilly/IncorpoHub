"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cac_route_1 = __importDefault(require("./routes/cac.route"));
//import { DynamoDB } from "aws-sdk";
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
app.use('/api', cac_route_1.default);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
//eu-north-1 (Current Region)
//https://sts.eu-north-1.amazonaws.com
//access key : AKIAS7SWZBAJLLKZD7XU
//secret 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
//haqqcac
