import React from "react";
import "configs/configureMobX";

import { render } from "react-dom";

import App from "./App";

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
