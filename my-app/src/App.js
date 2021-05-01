
import './App.css';
import MainHome from './mainHome';
import Perfil from './perfil';
import {Route, Link} from 'react-router-dom';
function App() {

  return (
   <div className="App">
     <Route exact path="/" component={MainHome}/>
     <Route exact path="/home" component={MainHome}/>
     <Route exact path="/perfil" component={Perfil}/>
   </div>




  );

  
}








export default App;
