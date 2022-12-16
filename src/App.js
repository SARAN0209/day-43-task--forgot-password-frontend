
import './App.css';
import Login from './reg/login';
import Regsiter from './reg/regsiter';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Forget from './reg/forget';
import Success from './reg/success';

function App() {
  return (
<>

<BrowserRouter>
  <Routes>
    <Route path='' element={<Login/>}/>
  
  <Route path='/regi' element={<Regsiter/>}/>
  <Route path='/for' element={<Forget/>}/>
  <Route path='/suceess' element={<Success/>}/>
  


  </Routes>
</BrowserRouter>

</>
  );
}

export default App;
