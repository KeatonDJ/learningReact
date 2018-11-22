import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import * as serviceWorker from "./serviceWorker";
import Counter from "./components/counter";
import Clock from "./components/clock"

ReactDOM.render(
  <Counter />,
  document.getElementById("hours"));

ReactDOM.render(
  <Counter />,
  document.getElementById("minutes"));

ReactDOM.render(
  <Counter />,
  document.getElementById("seconds"));

ReactDOM.render(
  <Clock />,
  document.getElementById("clock"));

serviceWorker.register();
