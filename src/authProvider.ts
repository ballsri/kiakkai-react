import { AuthBindings } from "@refinedev/core";
import { Auth } from "aws-amplify";
export const authProvider: AuthBindings = {
  register: async ({ username, password, secret }: Record<string, string>) => {
    if (username && password) {
      const params: {
        username: string;
        password: string;
        attributes?: Record<string, string>;
        validationData?: string[];
      } = {
        username,
        password,
      };
      let validationData: string[] = [];
      let attributes: Record<string, string> = {
        "custom:isHasSecret": "0",
      };
      if (secret && secret !== "" && secret !== null && secret !== undefined) {
        validationData.push(secret)
        attributes["custom:isHasSecret"] = "1"
      }
      params.attributes = attributes;
      params.validationData = validationData;
      const user  = await Auth.signUp(params);
      if (user) {
        return {
          success: true,
          redirectTo: "/login",
        };
      }
    }
    return {
      success: false,
      error: {
        name: "RegisterError",
        message: "Invalid username or password or secret",
      },
    };
  },
  login: async ({ username, password }) => {
    if (username && password) {
      try {

        const user = await Auth.signIn(username, password)
        
        if (!(user.getUsername())) {
          return {
            success: false,
            error: {
              name: "LoginError",
              message: "Invalid username or password",
            },
          };
        } else {

          return {
            success: true,
            redirectTo: "/",
          };
        }
      } catch (err) {
        return {
          success: false,
          error: {
            name: "LoginError",
            message: (err as Error).message,

          },
        };
      }
    }

    return {
      success: false,
      error: {
        name: "LoginError",
        message: "Invalid username or password",
      },
    };
  },
  logout: async () => {
    return await Auth.signOut().then(() => {
      console.log("logged out");
      
      return {
        success: true,
        redirectTo: "/login",
      };
    })
  },
  check: async () => {
    try {
    const user = await Auth.currentAuthenticatedUser({ bypassCache:true });
      return {
        authenticated: !!user,
      };
    } catch (err) {
      return {
        authenticated: false,
        redirectTo: "/login",
        logout: true,
      };
    }

  },
  getPermissions: async () => {
   const user = await Auth.currentAuthenticatedUser();
   
    if (user) {
      return {
        role: user.getSignInUserSession()?.getIdToken().payload["cognito:groups"]?.[0] || "user",
      };
    }
    return {
      role: "GUEST",
    };
  },
  getIdentity: async () => {
    if (true) {
      return {
        id: 1,
        name: "John Doe",
        avatar: "https://i.pravatar.cc/300",
      };
    }
    return null;
  },
  onError: async (error) => {
    console.error(error);
    return { error };
  },
};
