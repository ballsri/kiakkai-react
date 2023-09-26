import React from "react";
import "./polyfills";
import { createRoot } from "react-dom/client";

import App from "./App";
import config from "./aws-exports";
import {Amplify} from "aws-amplify";

Amplify.configure(config);
const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
