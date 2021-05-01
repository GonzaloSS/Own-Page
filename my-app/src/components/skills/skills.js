import React from 'react';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import './skills.css'
import { Link } from 'react-router-dom';


import linkedin from '../../img/linkedin.png'
import github from '../../img/github.png'
import copi from '../../img/copi.png'
import cu from '../../img/cu.png'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import angular from '../../img/angular.png'
import deno from '../../img/deno.png'
import ionic from '../../img/ionic.png'
import javascript from '../../img/javascript.png'
import node from '../../img/node.png'
import odoo from '../../img/odoo.png'
import react from '../../img/react.png'
import typescript from '../../img/typescript.png'


import cv from '../../documents/cv_JuanGonzaloSantanaSantana.pdf'

export default function Skills() {

    return (

        <div>
            
           <Link to="/home">
            <SkipPreviousIcon id="back"></SkipPreviousIcon>
            </Link>
            <div class="container">
                <a href="https://github.com/GonzaloSS" target="_blank">
                    <img id="img-git" src={github} />
                </a>
                <a href="https://www.linkedin.com/in/gonzalo-santana-64a729200/" target="_blank">
                    <img id="img-linkedin" src={linkedin} />
                </a>
              
            </div>

            <div class="me">
                <br />
                <h1>Buenas,</h1>

                <h2>Soy un chico de 20 años interesado en la programación,<br />
He desarrollado varias aplicaciones para algunas empresas a lo largo de mis estudios<br /><br />
Principalmente estoy interesado en el desarrollo de frontends pero me puedo adaptar a desarrollar backends también<br /><br />
Estoy buscando activamente trabajo, si desea contactar conmigo, puede hacerlo a través del linkedin</h2>
            </div>
            <div class="skills">
                <br /><br /><br /><br />
                <h1>Mis conocimientos</h1>
                <Divider id="divider" />
                <br /><br />
                <i><img class="zoom" src={typescript} /></i>
                <i><img class="zoom" src={react} /></i>
                <i><img class="zoom" src={ionic} /></i>
                <i><img class="zoom" src={angular} /></i>
                <i><img class="zoom" src={node} /></i>
                <i><img class="zoom" src={odoo} /></i>
                <i><img class="zoom" src={deno} /></i>
                <i><img class="zoom" src={javascript} /></i>
            </div>
            <br /><br /><br /><br /><br /><br />
            <div class="aptitudes">
                <div id="header">
                    <h1>Mis aptitudes</h1>
                    <Divider id="dividers" />
                </div>
                <br /><br /><br /><br />
                <div class="row">
                    <div class="column">
                        <h3>*  Habilidades para resolver problemas</h3>
                        <h3>*  Capacidad de tomar la iniciativa</h3>
                        <h3>*  Capacidad de trabajar bien bajo presión</h3>

                    </div>
                    <div class="column">
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <h3>* Paciencia</h3>
                    </div>
                    <div class="column">

                        <h3>* Habilidades de comunicación</h3>
                        <h3>*  Actitud positiva</h3>
                        <h3>*  Actitud positiva</h3></div>
                </div>
            </div>
            <div class="experience">
                <div id="header">
                    <h1>Mis experiencias</h1>
                    <Divider id="dividers" />
                </div>
                <br /><br />
                <div class="experiences">
                    <div>
                        <p id="pp"><img id="img" src={cu} /></p>
                        <br />
                        <p id="experiencia" >2021  Central Uniformes S.L<br />
                    Dos meses de practicas desarrollando una aplicación de uso interino</p>
                    </div>
                    <br />
                    <br /><br />
                    <div>
                        <p id="pp"><img id="img" src={copi} /></p>
                        <br />
                        <p id="experiencia">2019  Copicanarias<br />
                    Dos meses de practicas administrando redes y montando equipos</p>
                    </div>
                </div>





            </div>
            <br /><br /><br /><br /><br /><br />
            <div class="cv">
                <h1>Si usted desea descargar mi CV,<br />
                    pinche aquí</h1>

                <Button variant="contained" color="primary"><a href={cv} download>Descargar CV</a></Button>
            </div>

        </div>

    );

}


