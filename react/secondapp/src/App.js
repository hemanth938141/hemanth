
import Users from './Users';
import './App.css';
import F from './Form1'
import Nav from './Nav';

import Classes1 from './classes1';
import {BrowserRouter} from 'react-router-dom'
function App() {

  // var users =["one","two","thtrre"];
  
function updateu(users){

console.log("users",users)

}

  return (
    <div>
      {/* <Users use={users}></Users> */}
    {/* <Users fn ={updateu}></Users> */}
      
    {/* <F></F> */}
    {/* <Classes1></Classes1> */}
    <BrowserRouter>
    <Nav></Nav>
    </BrowserRouter>
    </div>
  );
}


export default App;
