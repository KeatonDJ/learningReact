import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import * as serviceWorker from "./serviceWorker";
import Welcome from "./components/welcome";

const element = <Welcome name = "admin" password = "password" />;

function tick(){
  const element = <Welcome name = "admin" password = "password" />;

  ReactDOM.render(
    element,
    document.getElementById("root"));

}

setInterval(tick, 1000);
