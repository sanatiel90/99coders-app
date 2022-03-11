import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login';
import Site from './pages/Site';
import './global-style.css';
import Chart from './pages/Chart';
import Register from './pages/Register';
import ResetPassword from './pages/ResetPassword';
import Home from './pages/Home';
import NewClient from './pages/NewClient';

import './services/firebase';

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Site/>}  />
        <Route path='/login' element={<Login/>}  />
        <Route path='/register' element={<Register/>}  />
        <Route path='/chart' element={<Chart/>}  />
        <Route path='/reset' element={<ResetPassword/>}  />
        <Route path='/home' element={<Home/>}  />
        <Route path='/new-client' element={<NewClient/>}  />
        <Route />
      </Routes>   
   </BrowserRouter>

  );
}

export default App;
