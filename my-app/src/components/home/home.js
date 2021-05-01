import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import github from '../../img/github.png'
import  './home.css'
import mesa from '../../img/mesa.png'




export default function Home() {


    return (
        <div id="prueba">
        <div id="github">
          <a href="https://github.com/GonzaloSS" target="_blank">
          <img id="img-github" src={github}/>
         
          </a>
        </div>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <div id='title'>
        <h2>Bienvenido,</h2>
          <h5>Soy un programador junior<br/>que está terminando<br/>el grado superior de desarrollo<br/> de aplicaciones multiplataformas. <br/>
          con ganas de aprender y mejorar! </h5>
  
          <Link to="/perfil"><Button  variant="contained" color="primary" >Saber más</Button></Link>
        </div>
        <img id="mesa" src={mesa}/>
        </div>
    );
}

