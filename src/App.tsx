import { Authenticated, Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import {
  ErrorComponent,
  notificationProvider,
  RefineSnackbarProvider,
} from "@refinedev/mui";

import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import dataProvider, { GraphQLClient } from "@refinedev/graphql";
import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { authProvider } from "./authProvider";
import { ColorModeContextProvider } from "./contexts/color-mode";

import { StyledEngineProvider } from "@mui/material/styles";

// layouts
import { ThemedLayoutV2 } from "./components/themedLayout";
import { ThemedHeaderV2 } from "./components/themedLayout/header";
import { ThemedSiderV2 } from "./components/themedLayout/sider";
import { ThemedTitleV2 } from "./components/themedLayout/title";

// components
import {Loading} from "./components/loading";

// Pages
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Home } from "./pages/home";
import { CircularProgress } from "@mui/material";

// icons
import HomeIcon from "@mui/icons-material/Home";

const API_URL = "https://your-graphql-url/graphql";
const client = new GraphQLClient(API_URL);
const gqlDataProvider = dataProvider(client);

function App() {
  return (
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <RefineKbarProvider>
          <ColorModeContextProvider>
            <CssBaseline />
            <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
            <RefineSnackbarProvider>
              <Refine
                dataProvider={gqlDataProvider}
                notificationProvider={notificationProvider}
                routerProvider={routerBindings}
                authProvider={authProvider}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  projectId: "Ty4wW7-OTiBOQ-OoMxBc",
                }}
                resources={[
                  {
                    name: "home",
                    list: "/",
                    meta: {
                      title: "Home",
                      icon: <HomeIcon />,
                    },
                  },
                ]}
              >
                <Routes>
                  <Route
                    element={
                      <Authenticated
                        fallback={<CatchAllNavigate to="/login" />}
                        loading={
                          <ThemedLayoutV2
                            Header={ThemedHeaderV2}
                            Sider={ThemedSiderV2}
                            Title={ThemedTitleV2}
                          >
                            <Loading />
                            <Outlet />
                          </ThemedLayoutV2>
                        }
                      >
                        <ThemedLayoutV2
                          Header={ThemedHeaderV2}
                          Sider={ThemedSiderV2}
                          Title={ThemedTitleV2}
                        >
                          <Outlet />
                        </ThemedLayoutV2>
                      </Authenticated>
                    }
                  >
                    <Route index element={<Loading />} />
                  </Route>
                  <Route
                    element={
                      <Authenticated
                        fallback={<Outlet />}
                        loading={
                          <ThemedLayoutV2
                            Header={ThemedHeaderV2}
                            Sider={ThemedSiderV2}
                            Title={ThemedTitleV2}
                          >
                            <Loading />
                            <Outlet />
                          </ThemedLayoutV2>
                        }
                      >
                        <NavigateToResource resource="home" />
                      </Authenticated>
                    }
                  >
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                  </Route>

                  <Route path="*" element={<ErrorComponent />} />
                </Routes>
                <RefineKbar />
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
              </Refine>
            </RefineSnackbarProvider>
          </ColorModeContextProvider>
        </RefineKbarProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  );
}

export default App;
