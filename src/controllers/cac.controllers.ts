import express, { Express, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid"
import { DocumentClient } from "../config/db";
import { getCountryFields } from '../utils'
import { Country, ICompany } from "../types";
import { insertItem } from "../repository/dynamo";
// modelName -- CompanyRegistration

export const registerCompany = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { companyName, country, address, postalCode } =
      req.body as ICompany; 
    const requiredFields = getCountryFields(country);

    for (const field of requiredFields) {
      if (!(field in req.body)) {
      
        res.status(400).json({ message: `Missing required field: ${field}` });
        return
      }
    }
    req.body.id = uuidv4()
    const newItem = await insertItem("haqqcac", req.body);
    console.log("newItem", newItem);
    res.status(500).json({ data: "Compant registration is successful" });  
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getCountryInformation = async (req: Request, res: Response) => {
  const { country } = req.params as { country: Country };

  try {
    const result = getCountryFields(country);
    res.status(200).json({ data: result });
  } catch (error) {
    res.send(400).json({ error: "Bad request" });
  }
};

