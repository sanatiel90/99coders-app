import React, { useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Login from './pages/Login';
import Site from './pages/Site';
import './global-style.css';
import Chart from './pages/Chart';
import Register from './pages/Register';
import ResetPassword from './pages/ResetPassword';
import Home from './pages/Home';
import NewClient from './pages/NewClient';

import './services/firebase';
import EditClient from './pages/EditClient';
import { AuthContext, AuthContextProvider } from './contexts/AuthContext';

function App() {  

  function RequireAuth({ children }: { children: JSX.Element }) {
    const { logado } = useContext(AuthContext);
    let location = useLocation();
    if(!logado){
       return <Navigate to="/login" state={{ from: location }} replace />
    }

    return children;
  }
  
  return (
   <AuthContextProvider>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Site/>}  />
          <Route path='/login' element={<Login/>}  />
          <Route path='/register' element={<Register/>}   />
          <Route path='/chart' element={<Chart/>}  />          
          <Route path='/reset' element={<ResetPassword/>}  />

          <Route path='/home' element={ <RequireAuth><Home/></RequireAuth>}  />
          <Route path='/new-client' element={<RequireAuth><NewClient/></RequireAuth>}  />
          <Route path='/edit-client/:id' element={<RequireAuth><EditClient/></RequireAuth>}  />
          <Route />
        </Routes>   
    </BrowserRouter>
   </AuthContextProvider> 

  );
}

export default App;
