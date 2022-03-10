import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Site from './pages/Site';

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Site/>}  />
        <Route path='/login' element={<Login/>}  />
        <Route />
      </Routes>   
   </BrowserRouter>

  );
}

export default App;
