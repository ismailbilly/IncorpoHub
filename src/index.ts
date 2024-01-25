import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cacRoutes from './routes/cac.route'
//import { DynamoDB } from "aws-sdk";
dotenv.config();


const app: Express = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
const port = process.env.PORT || 3000;






app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});
app.use('/api', cacRoutes)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

//eu-north-1 (Current Region)
//https://sts.eu-north-1.amazonaws.com
//access key : AKIAS7SWZBAJLLKZD7XU
//secret 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
//haqqcac