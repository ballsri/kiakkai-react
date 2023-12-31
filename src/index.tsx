import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";

import App from "./App";
import config from "./aws-exports";
import { Amplify } from "aws-amplify";
import "../node_modules/flag-icons/css/flag-icons.min.css";
import "./i18n"
import { Loading } from "./components/loading";

Amplify.configure(config);
const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <React.Suspense fallback={<Loading/>}>
      <App />
    </React.Suspense>
  </React.StrictMode>
);
