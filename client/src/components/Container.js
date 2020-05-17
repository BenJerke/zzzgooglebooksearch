import React from "react";
import bootstrap from "bootstrap";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function Container(props) {
  return <div className={`container${props.fluid ? "-fluid" : ""}`}>{props.children}</div>;
}

export default Container;