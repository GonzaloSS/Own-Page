
import './App.css';
import Prueba from './Prueba';
import Vista2 from './Vista2';
import {Route, Link} from 'react-router-dom';
function App() {

  return (
   <div className="App">
     <Route exact path="/" component={Prueba}/>
     <Route exact path="/vista2" component={Vista2}/>
   </div>




  );

  
}








export default App;
