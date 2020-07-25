import "./styles/css/index.css";

import * as serviceWorker from "./serviceWorker";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('[data-js="root"]')
);

serviceWorker.register();
