import { useForm } from "@refinedev/react-hook-form";
import * as React from "react";
import {
  // RegisterFormTypes,
  RegisterPageProps,
  useActiveAuthProvider,
  BaseRecord,
  HttpError,
  useTranslate,
  useRouterContext,
  useRouterType,
  useLink,
  useRegister,
} from "@refinedev/core";
import { FormPropsType } from "../index";
import { layoutStyles, titleStyles } from "./styles";
import { ThemedTitle } from "@refinedev/mui";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import MuiLink from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import type { BoxProps } from "@mui/material/Box";
import type { CardContentProps } from "@mui/material/CardContent";
import { validate } from "graphql";
import { CircularProgress } from "@mui/material";

type RegisterProps = RegisterPageProps<
  BoxProps,
  CardContentProps,
  FormPropsType
>;

/**
 * The register page will be used to register new users. You can use the following props for the <AuthPage> component when the type is "register".
 * @see {@link https://refine.dev/docs/api-reference/mui/components/mui-auth-page/#register} for more details.
 */

export interface RegisterFormTypes {
  username?: string;
  password?: string;
  confirm_password?: string;
  secret?: string;
  providerName?: string;
}
export const RegisterPage: React.FC<RegisterProps> = ({
  loginLink,
  wrapperProps,
  contentProps,
  renderContent,
  providers,
  formProps,
  title,
}) => {
  const { onSubmit, ...useFormProps } = formProps || {};
  const {
    register,
    watch,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<BaseRecord, HttpError, RegisterFormTypes>({
    ...useFormProps,
  });

  const authProvider = useActiveAuthProvider();
  const { mutate: registerMutate, isLoading } = useRegister<RegisterFormTypes>({
    v3LegacyAuthProviderCompatible: Boolean(authProvider?.isLegacy),
  });
  const translate = useTranslate();
  const routerType = useRouterType();
  const Link = useLink();
  const { Link: LegacyLink } = useRouterContext();

  const ActiveLink = routerType === "legacy" ? LegacyLink : Link;

  const PageTitle =
    title === false ? null : (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "32px",
          fontSize: "20px",
        }}
      >
        {title ?? (
          <ThemedTitle
            collapsed={false}
            wrapperStyles={{
              gap: "8px",
            }}
          />
        )}
      </div>
    );

  const renderProviders = () => {
    if (providers && providers.length > 0) {
      return (
        <>
          <Stack spacing={1}>
            {providers.map((provider: any) => {
              return (
                <Button
                  key={provider.name}
                  color="secondary"
                  fullWidth
                  variant="outlined"
                  sx={{
                    color: "primary.light",
                    borderColor: "primary.light",
                    textTransform: "none",
                  }}
                  onClick={() =>
                    registerMutate({
                      providerName: provider.name,
                    })
                  }
                  startIcon={provider.icon}
                >
                  {provider.label}
                </Button>
              );
            })}
          </Stack>
          <Divider sx={{ fontSize: 12, marginY: "16px" }}>
            {translate("pages.login.divider", "or")}
          </Divider>
        </>
      );
    }
    return null;
  };

  const Content = (
    <Card {...(contentProps ?? {})}>
      <CardContent sx={{ p: "32px", "&:last-child": { pb: "32px" } }}>
        <Typography
          component="h1"
          variant="h5"
          align="center"
          style={titleStyles}
          color="primary"
          fontWeight={700}
        >
          {translate("pages.register.title", "Sign up for your account")}
        </Typography>
        {renderProviders()}
        <Box
          component="form"
          onSubmit={handleSubmit((data) => {
            if (onSubmit) {
              return onSubmit(data);
            }

            return registerMutate(data);
          })}
        >
          <TextField
            {...register("username", {
              required: true,
              setValueAs(value) {
                return value.trim().toLowerCase();
              },
            })}
            id="username"
            margin="normal"
            fullWidth
            label={translate("pages.register.username", "Username")}
            error={!!errors.username}
            helperText={errors["username"] ? errors["username"].message : ""}
            name="username"
            autoComplete="username"
            sx={{
              mt: 0,
            }}
          />
          <TextField
            {...register("password", {
              required: true,
              minLength: {
                value: 8,
                message: translate(
                  "pages.register.fields.password.error",
                  "Password must be at least 8 characters"
                ),
              },

              validate: (value) => {
                return (
                  value &&
                  [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every((pattern) =>
                    pattern.test(value)
                  ) ||
                  translate(
                    "pages.register.fields.password.error",
                    "Password must contain at least one lowercase letter, one uppercase letter and one number"
                  )
                );
              },

              onBlur: (e) => {
                e.preventDefault();
                trigger("password");
                trigger("confirm_password");
              },
            })}
            id="password"
            margin="normal"
            fullWidth
            name="password"
            label={translate("pages.register.fields.password", "Password")}
            helperText={errors["password"] ? errors["password"].message : ""}
            error={!!errors.password}
            type="password"
            placeholder="●●●●●●●●"
            autoComplete="current-password"
            onCopy={(e) => {
              e.preventDefault();
              return false;
            }}
            onCut={(e) => {
              e.preventDefault();
              return false;
            }}
            sx={{
              mb: 0,
            }}
          />

          <TextField
            {...register("confirm_password", {
              required: true,
              onBlur: (e) => {
                e.preventDefault();
                trigger("confirm_password");
              },
              validate: (value) =>
                value === watch("password") ||
                translate(
                  "pages.register.fields.confirm_password.error",
                  "Passwords do not match"
                ),
            })}
            id="confirm_password"
            margin="normal"
            fullWidth
            name="confirm_password"
            label={translate(
              "pages.register.fields.confirm_password",
              "Confirm Password"
            )}
            helperText={
              errors["confirm_password"]
                ? errors["confirm_password"].message
                : ""
            }
            error={!!errors.confirm_password}
            type="password"
            placeholder="●●●●●●●●"
            onPaste={(e) => {
              e.preventDefault();
              return false;
            }}
            sx={{
              mb: 0,
            }}
          />

          <TextField
            {...register("secret", {})}
            id="secret"
            margin="normal"
            fullWidth
            name="secret"
            label={translate(
              "pages.register.fields.secret",
              "Invitation Code (For Operator)"
            )}
            helperText={errors["secret"] ? errors["secret"].message : ""}
            error={!!errors.secret}
            sx={{
              mb: 0,
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={isLoading}
            sx={{
              mt: "24px",
            }}
          >
            {isLoading ? (
              <CircularProgress size={24} color="inherit" />
            
            ) : (
              translate("pages.register.signup", "Sign up")
            )}
          </Button>
          {loginLink ?? (
            <Box
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
              sx={{
                mt: "24px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="body2" component="span" fontSize="12px">
                {translate(
                  "pages.login.buttons.haveAccount",
                  "Have an account?"
                )}
              </Typography>
              <MuiLink
                ml="4px"
                variant="body2"
                color="primary"
                component={ActiveLink}
                underline="none"
                to="/login"
                fontSize="12px"
                fontWeight="bold"
              >
                {translate("pages.login.signin", "Sign in")}
              </MuiLink>
            </Box>
          )}
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Box component="div" style={layoutStyles} {...(wrapperProps ?? {})}>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        {renderContent ? (
          renderContent(Content, PageTitle)
        ) : (
          <>
            {PageTitle}
            {Content}
          </>
        )}
      </Container>
    </Box>
  );
};
