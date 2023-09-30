import logo from './logo.svg';
import './App.css';
import TodoWrapper from './component/TodoWrapper';
import Login from './component/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './component/Register';


function App() {
 
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/signup' element={<Register  />}></Route>
          <Route path='/TodoWrapper' element={<TodoWrapper/>}></Route>
          
      </Routes>
     </BrowserRouter>
      
       
        
      </header>
    </div>
  );
}

export default App;
