'use strict';
const AWS = require('aws-sdk');
 
module.exports.createClass = async (event) => {
  const body = JSON.parse(Buffer.from(event.body, 'base64').toString());
  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  const putParams = {
    TableName: process.env.DYNAMODB_CLASS_TABLE,
    Item: {
      primary_key: body.name
    },
  };
  await dynamoDb.put(putParams).promise();
 
  return {
    statusCode: 201,
  };
};
