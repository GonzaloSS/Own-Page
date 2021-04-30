import React from 'react';
import NavBar from './components/toolbar'
import SkillList from './components/skillList'
import coding from './img/coding.png'
import './mainPage.css';


function Prueba() {

  return (

    <div>
      <NavBar></NavBar>
      <div class="header">
       
      </div>
      <div class="body">
        <br/><br/>
        <div>
        <img class="coding" src={coding} alt="coding"/>
        <br/><br/>
        <span>Mis conocimientos</span>
        <br/> <br/>
        <SkillList></SkillList>
        </div>
      </div>
    </div>
    
  );
}



export default Prueba;
