import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


class Banner extends Component {
    state = { 

     }

    render() { 
        return (<h1 className = "jumbotron"> This is my banner! </h1>);
    }
}
 
export default Banner;