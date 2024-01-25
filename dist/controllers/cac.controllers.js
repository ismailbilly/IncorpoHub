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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCountryInformation = exports.registerCompany = void 0;
const uuid_1 = require("uuid");
const utils_1 = require("../utils");
const dynamo_1 = require("../repository/dynamo");
// modelName -- CompanyRegistration
const registerCompany = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { companyName, country, address, postalCode } = req.body;
        const requiredFields = (0, utils_1.getCountryFields)(country);
        for (const field of requiredFields) {
            if (!(field in req.body)) {
                res.status(400).json({ message: `Missing required field: ${field}` });
                return;
            }
        }
        req.body.id = (0, uuid_1.v4)();
        const newItem = yield (0, dynamo_1.insertItem)("haqqcac", req.body);
        console.log("newItem", newItem);
        res.status(500).json({ data: "C" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
exports.registerCompany = registerCompany;
const getCountryInformation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { country } = req.params;
    try {
        const result = (0, utils_1.getCountryFields)(country);
        res.status(200).json({ data: result });
    }
    catch (error) {
        res.send(400).json({ error: "Bad request" });
    }
});
exports.getCountryInformation = getCountryInformation;
