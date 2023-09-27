/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const AWS = require("aws-sdk");
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context) => {
  const secret = event.request.validationData
    ? event.request.validationData['0']
    : null;
  if (secret && secret !== undefined && secret !== null && secret !== "") {
    console.log("SECRET: ", secret);
    try {
      const params = {
        TableName: process.env.SECRET_TABLE,
        IndexName: process.env.SECRET_INDEX,
        KeyConditionExpression: "secret = :secret",
        ExpressionAttributeValues: {
          ":secret": secret,
        },
      };
      const result = await dynamoDB.query(params).promise();
      if (result.Count === 0) {
        // If invitation code is invalid, reject sign-up
        throw new Error("Invalid invitation code.");
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  // Return to Amazon Cognito
  event.response.autoConfirmUser = true;
  return event
};
