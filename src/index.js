import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import * as serviceWorker from "./serviceWorker";
import Counter from "./components/counter";

ReactDOM.render(<Counter />, document.getElementById("hours"));
ReactDOM.render(<Counter />, document.getElementById("minutes"));
ReactDOM.render(<Counter />, document.getElementById("seconds"));

serviceWorker.register();
