
import {DocumentClient} from "../config/db";
import {GenericObject} from '../types'

const getAllItems = async (TABLE_NAME: string) => {
  const params = {
    TableName: TABLE_NAME,
  };
  return await DocumentClient.scan(params).promise();
};

const getSingleItemById = async (TABLE_NAME: string, id: string) => {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      id,
    },
  };
  return await DocumentClient.get(params).promise();
};

const insertItem = async (TABLE_NAME: string, itemObject: GenericObject) => {
  const params = {
    TableName: TABLE_NAME,
    Item: itemObject,
  };
  return await DocumentClient.put(params).promise();
};

const generateUpdateQuery = (fields: GenericObject) => {
  let exp = {
    UpdateExpression: "set",
    ExpressionAttributeNames: {},
    ExpressionAttributeValues: {},
  };
  Object.entries(fields).forEach(([key, item]) => {
    exp.UpdateExpression += ` #${key} = :${key},`;
    // exp.ExpressionAttributeNames[`#${key}`] = key;
    // exp.ExpressionAttributeValues[`:${key}`] = item;
  });
  exp.UpdateExpression = exp.UpdateExpression.slice(0, -1);
  return exp;
};

const updateItem = async (TABLE_NAME: string, id: string, itemObject: GenericObject) => {
  const expression = generateUpdateQuery(itemObject);
  const params = {
    TableName: TABLE_NAME,
    Key: {
      id,
    },
    ConditionExpression: "attribute_exists(id)",
    ...expression,
    ReturnValues: "UPDATED_NEW",
  };
  return await DocumentClient.update(params).promise();
};

const deleteSingleItemById = async (TABLE_NAME: string, id: string) => {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      id,
    },
  };
  return await DocumentClient.delete(params).promise();
};

export {
  getAllItems,
  getSingleItemById,
  insertItem,
  updateItem,
  deleteSingleItemById,
};
