import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function Row(props) {
  return <div className={`row${props.fluid ? "-fluid" : ""}`}>{props.children}</div>;
}

export default Row;
