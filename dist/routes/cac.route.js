"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cac_controllers_1 = require("../controllers/cac.controllers");
const router = express_1.default.Router();
router.post("/", cac_controllers_1.registerCompany);
router.get("/:country", cac_controllers_1.getCountryInformation);
exports.default = router;
