import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path='register' element={ <Register /> } />
          <Route path='login' element={ <Login /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
