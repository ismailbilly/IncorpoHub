import AWS from "aws-sdk";
import dotenv from "dotenv";
dotenv.config();
AWS.config.update({
  region: process.env.AWS_DEFAULT_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_ID,
});

export const DocumentClient = new AWS.DynamoDB.DocumentClient();
