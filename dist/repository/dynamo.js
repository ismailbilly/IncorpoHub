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
exports.deleteSingleItemById = exports.updateItem = exports.insertItem = exports.getSingleItemById = exports.getAllItems = void 0;
const db_1 = require("../config/db");
const getAllItems = (TABLE_NAME) => __awaiter(void 0, void 0, void 0, function* () {
    const params = {
        TableName: TABLE_NAME,
    };
    return yield db_1.DocumentClient.scan(params).promise();
});
exports.getAllItems = getAllItems;
const getSingleItemById = (TABLE_NAME, id) => __awaiter(void 0, void 0, void 0, function* () {
    const params = {
        TableName: TABLE_NAME,
        Key: {
            id,
        },
    };
    return yield db_1.DocumentClient.get(params).promise();
});
exports.getSingleItemById = getSingleItemById;
const insertItem = (TABLE_NAME, itemObject) => __awaiter(void 0, void 0, void 0, function* () {
    const params = {
        TableName: TABLE_NAME,
        Item: itemObject,
    };
    return yield db_1.DocumentClient.put(params).promise();
});
exports.insertItem = insertItem;
const generateUpdateQuery = (fields) => {
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
const updateItem = (TABLE_NAME, id, itemObject) => __awaiter(void 0, void 0, void 0, function* () {
    const expression = generateUpdateQuery(itemObject);
    const params = Object.assign(Object.assign({ TableName: TABLE_NAME, Key: {
            id,
        }, ConditionExpression: "attribute_exists(id)" }, expression), { ReturnValues: "UPDATED_NEW" });
    return yield db_1.DocumentClient.update(params).promise();
});
exports.updateItem = updateItem;
const deleteSingleItemById = (TABLE_NAME, id) => __awaiter(void 0, void 0, void 0, function* () {
    const params = {
        TableName: TABLE_NAME,
        Key: {
            id,
        },
    };
    return yield db_1.DocumentClient.delete(params).promise();
});
exports.deleteSingleItemById = deleteSingleItemById;
