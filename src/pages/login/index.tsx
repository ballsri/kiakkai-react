import { AuthPage } from "../../components";
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
