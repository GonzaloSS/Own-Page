import React, {Component} from "react";
import {Route, Link, Redirect} from 'react-router-dom';
import { NavLink, useHistory } from 'react-router-dom'




class Boton extends Component{
   
    render(){
        
        return(
            <Link to="/perfil">
             <button onClick={hola}>Click me!</button>
             </Link>

           
        );
    }


  
   
}
function hola(){
     console.log("hola")   
}

export default Boton;
