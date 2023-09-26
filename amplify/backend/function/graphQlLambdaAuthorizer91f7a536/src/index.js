// This is sample code. Please update this to suite your schema

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  const token = event.authorizationToken;
  console.log("event", event);
  console.log("token", token);
  const user = verifyToken(token);
  let auth = true;

  if (!user) {
    auth = false;
  }

  console.log("auth", auth);

  const response = {
    isAuthorized: auth,
  };

  console.log(`response >`, JSON.stringify(response, null, 2));
  return response;
};

function verifyToken(token) {
  // Mock logic to verify a token and return user details.
  // Replace with actual logic to validate the token and retrieve user details.
  if (token === "VALID_TOKEN") {
    return {
      id: "123",
      role: "ADMIN",
    };
  }

  return null;
}
