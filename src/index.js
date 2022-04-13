import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";

let root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(<App />);
