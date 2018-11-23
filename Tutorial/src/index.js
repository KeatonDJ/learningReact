import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import * as serviceWorker from "./serviceWorker";
import Welcome from "./components/welcome";

function tickTock(){
  const element = <Welcome />;

  ReactDOM.render(
    element,
    document.getElementById("clock"));

}

setInterval(tickTock, 1000);

serviceWorker.register();
