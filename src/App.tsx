import { Authenticated, Refine, WelcomePage } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import { ErrorComponent, notificationProvider, RefineSnackbarProvider } from "@refinedev/mui";

import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import dataProvider, { GraphQLClient } from "@refinedev/graphql";
import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { authProvider } from "./authProvider";
import { Login } from "./pages/login";
import { ColorModeContextProvider } from "./contexts/color-mode";
import { Register } from "./pages/register";
const API_URL = "https://your-graphql-url/graphql";

const client = new GraphQLClient(API_URL);
const gqlDataProvider = dataProvider(client);

function App() {
  return (
    <BrowserRouter>
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
            >
              <Routes>
                <Route element={
                  <Authenticated fallback={<Outlet/>}>
                    <CatchAllNavigate to="/"/>
                  </Authenticated>
                }>
                  <Route path="login" element={<Login />} />
                  <Route path="register" element={<Register />} />
                </Route>
                <Route
                  element={
                    <Authenticated redirectOnFail="/login">
                      <Outlet />
                    </Authenticated>
                  }
                >
                  <Route index element={<WelcomePage />} />
                </Route>
                <Route path="*" element={<ErrorComponent/>} />
              </Routes>
              <RefineKbar />
              <UnsavedChangesNotifier />
              <DocumentTitleHandler />
            </Refine>
          </RefineSnackbarProvider>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
