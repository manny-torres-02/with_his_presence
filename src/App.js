// import React from 'react';
import * as React from 'react';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//ROUTING 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './App.css';

import Navbar from './components/navbar';
import Home from './pages/home';
import Login from './pages/login';
import Feed from './pages/feed';
import ErrorPage from './pages/errorpage';

function App() {
  return (
        <BrowserRouter>
  
        <Routes>
          {/* Show home page  */}
          <Route path="/" element={<Home />}/>
          <Route path="/feed" element={<Feed /> }/> 
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        </BrowserRouter>

  );
}

export default App;
