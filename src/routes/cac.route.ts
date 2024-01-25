import express from "express";
import {
  getCountryInformation,
  registerCompany,
} from "../controllers/cac.controllers";

const router = express.Router()

router.post("/", registerCompany);
router.get("/:country", getCountryInformation);


export default router