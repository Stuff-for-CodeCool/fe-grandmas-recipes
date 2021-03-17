import React, { StrictMode } from "react";
import { render } from "react-dom";

import "./style/bootstrap.min.css";
import "./style/style.css";
import App from "./App";

render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById("root")
);
