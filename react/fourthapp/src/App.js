import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Nav from './Nav';
function App() {
  return (
    <div>
      <BrowserRouter>
    <Nav></Nav>
      </BrowserRouter>
    </div>
  );
}

export default App;
