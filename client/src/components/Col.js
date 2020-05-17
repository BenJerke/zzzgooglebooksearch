import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function Col(props) {
    const size = props.size.split(" ").map(size => "col-" + size).join(" ");
  
    return (
      <div className={size}>
        {props.children}
      </div>
    );
    
  }
  
  export default Col;
  