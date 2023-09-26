import { Typography } from "@mui/material";
import { AuthPage } from "../../components";
import { API } from "aws-amplify";
import { listUsers } from "../../graphql/queries";
import { useEffect } from "react";
export const Login = () => {
  // query user from graphql
  // if user exists, redirect to dashboard
  // else, show login page

  useEffect(() => {
    const fetchUser = async () => {
      const user = await API.graphql({
        query: listUsers,
        authToken: "VALID_TOKEN",
      });
      console.log("user", user);
    };
    fetchUser();
  }, []);

  return (
    <>
      <AuthPage
        type="login"
        title=""
        forgotPasswordLink={false}
        formProps={{
          defaultValues: { email: "", password: "" },
        }}
      />
    </>
  );
};
