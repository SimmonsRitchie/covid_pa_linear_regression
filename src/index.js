import React from "react";
import ReactDOM from "react-dom";
import { loadData } from "./utils/load";

import App from "./App";

// RENDERAPP
// Function below checks to see whether we have already rendered the page
// if we have, it ensures we don't render it again.
let hasRendered = false;
const renderApp = data => {
  if (!hasRendered) {
    ReactDOM.render(<App data={data} />, document.getElementById("root"));
    hasRendered = true;
  }
};

// RENDER APP AFTER LOADING DATA
loadData()
  .then(data => {
    renderApp(data);
  })
  .catch(e => {
    console.error(e);
  });
