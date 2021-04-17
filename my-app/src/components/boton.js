import React, {Component} from "react";
import {Route, Link, Redirect} from 'react-router-dom';
import { NavLink } from 'react-router-dom'
class Boton extends Component{
   
    render(){
        return(
            <button onClick={this.verLog}>Click me!</button>
        );
    }
    verLog(){
        return(<Redirect exact to="/vista2" />)
      }
}

export default Boton;
