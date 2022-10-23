import logo from './logo.svg';
import './App.css';
import Register from './Register';
import {useState} from 'react'
import Dash from './DAsh';
function App() {


  const[isLogged,setState]= useState(false);

  if(isLogged){
    
  return (
    <div>
      <Dash></Dash>
     <button onClick ={()=>{
        setState(false)
      }}>logout</button>
    
    </div>
  );

  }

else{

 return (
    <div>
      <Register></Register>
      <button onClick ={()=>{
        setState(true)
      }}>login</button>
    </div>
  );
}
}

export default App;
