import React, {Component} from "react";
import {Route, Link, Redirect} from 'react-router-dom';
import { NavLink, useHistory } from 'react-router-dom'




class Boton extends Component{
   
    render(){
        
        return(
            <Link to="/vista2">
             <button >Click me!</button>
             </Link>

           
        );
    }
   
}

export default Boton;
