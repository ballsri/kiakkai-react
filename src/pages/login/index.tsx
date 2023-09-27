import { useNavigation } from "@refinedev/core";
import { AuthPage } from "../../components";
import { useIsAuthenticated } from "@refinedev/core";
import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
export const Login = () => {

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
